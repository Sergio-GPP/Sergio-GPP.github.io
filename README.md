# Sergio Guillén Pampliega · web personal

Código de [sergiogp.com](https://sergiogp.com/). Es una web personal de Sergio. `main` es la rama de publicación en GitHub Pages; el archivo `CNAME` vincula el dominio.

## Trabajar en local

```powershell
git status --short
git pull --ff-only origin main
python -m http.server 8765 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8765/`. Si hay cambios locales, conservarlos y revisar `git fetch origin main` antes de integrar el remoto; no ejecutar un `pull` que los pise.

Antes de publicar: `python scripts/check_site.py`, `node --check app.js`, `node --check data.js`, `git diff --check` y revisión visual de escritorio y móvil. El proceso completo está en [docs/PROCESO_PUBLICACION.md](docs/PROCESO_PUBLICACION.md). El mapa de dependencias está en [docs/INTEGRACIONES.md](docs/INTEGRACIONES.md).
