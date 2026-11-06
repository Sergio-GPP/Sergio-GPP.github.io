"""Comprobaciones estáticas mínimas antes de publicar la web personal."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_HTML = [
    ROOT / "index.html",
    ROOT / "caso-exito-email-marketing.html",
    ROOT / "caso-exito-chatbot-nexia.html",
    ROOT / "caso-exito-crm-comercial.html",
    ROOT / "caso-exito-sistema-editorial-ia.html",
    ROOT / "caso-exito-remarketing.html",
    ROOT / "caso-exito-remarketing-educativo.html",
    ROOT / "gracias.html",
    ROOT / "cv-print.html",
]
errors = []


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.h1 = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        identifier = attrs.get("id")
        if identifier:
            if identifier in self.ids:
                errors.append(f"ID duplicado: {identifier}")
            self.ids.add(identifier)
        if tag == "h1":
            self.h1 += 1
        for name in ("href", "src"):
            if attrs.get(name):
                self.links.append(attrs[name])


for path in PUBLIC_HTML:
    if not path.is_file():
        errors.append(f"Falta {path.name}")
        continue
    source = path.read_text(encoding="utf-8")
    parser = Page()
    parser.feed(source)
    if parser.h1 != 1:
        errors.append(f"{path.name}: se esperan 1 H1, hay {parser.h1}")
    if path.name != "gracias.html" and not re.search(r'<meta\s+name="description"', source):
        errors.append(f"{path.name}: falta meta description")
    if path.name.startswith("caso-") or path.name == "index.html":
        if 'rel="canonical"' not in source:
            errors.append(f"{path.name}: falta canonical")
    for link in parser.links:
        parsed = urlparse(link)
        if parsed.scheme or link.startswith(("//", "mailto:", "tel:", "data:")):
            continue
        if parsed.path and not (ROOT / parsed.path.lstrip("/")).exists():
            errors.append(f"{path.name}: enlace local roto: {link}")
        if parsed.fragment and not parsed.path and parsed.fragment not in parser.ids:
            errors.append(f"{path.name}: ancla inexistente: {link}")

for name in ("app.js", "data.js", "styles.css", "icons.js"):
    if not (ROOT / name).is_file():
        errors.append(f"Falta {name}")

public_code = "\n".join(
    path.read_text(encoding="utf-8") for path in PUBLIC_HTML + [ROOT / "app.js", ROOT / "data.js"]
    if path.is_file()
)
if re.search(r"aldrax|altrax|aldracks", public_code, re.I):
    errors.append("Hay una referencia a una marca ajena en el código público")
for name in ("caso-exito-crm-comercial.html", "caso-exito-sistema-editorial-ia.html"):
    if "identidad reservada" not in (ROOT / name).read_text(encoding="utf-8").lower():
        errors.append(f"{name}: falta indicar que la identidad del cliente está reservada")
if "https://lydavittbjyywdaklgoh.supabase.co/rest/v1/forms-sergiogp" not in public_code:
    errors.append("Revisar el destino del formulario")
if "sb_publishable_" not in (ROOT / "app.js").read_text(encoding="utf-8"):
    errors.append("El formulario no usa una clave pública de Supabase")
if re.search(r"sb_secret_|service_role|formsubmit\.co", public_code, re.I):
    errors.append("El código público contiene una credencial o proveedor anterior")

try:
    sitemap = ET.parse(ROOT / "sitemap.xml")
    listed = {node.text for node in sitemap.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")}
    expected = {"https://sergiogp.com/"}
    for path in PUBLIC_HTML:
        if path.name.startswith("caso-") and path.name != "caso-exito-remarketing-educativo.html":
            expected.add(f"https://sergiogp.com/{path.name}")
    if listed != expected:
        errors.append(f"Sitemap no coincide con las páginas canónicas: faltan {expected - listed}, sobran {listed - expected}")
except (OSError, ET.ParseError) as exc:
    errors.append(f"Sitemap inválido: {exc}")

home = (ROOT / "index.html").read_text(encoding="utf-8")
for index, markup in enumerate(re.findall(r'<script type="application/ld\+json">(.*?)</script>', home, re.S), 1):
    try:
        json.loads(markup)
    except json.JSONDecodeError as exc:
        errors.append(f"JSON-LD {index} inválido: {exc}")

try:
    static_check = subprocess.run(
        ["node", str(ROOT / "scripts" / "render_static_home.js"), "--check"],
        capture_output=True, text=True, check=False,
    )
    if static_check.returncode:
        errors.append("HTML estático desactualizado respecto a data.js: ejecuta node scripts/render_static_home.js")
except OSError as exc:
    errors.append(f"No se pudo comprobar el HTML estático: {exc}")

if (ROOT / "CNAME").read_text(encoding="utf-8").strip() != "sergiogp.com":
    errors.append("CNAME no apunta a sergiogp.com")

if errors:
    print("ERROR EN PREPUBLICACIÓN:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)
print("OK: HTML, rutas locales, identidad personal, formulario, sitemap y dominio")
