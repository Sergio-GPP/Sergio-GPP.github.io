# Guía de trabajo de esta web

- La web es la marca personal de Sergio Guillén Pampliega. No incorporar otras marcas, agencias, socios ni relaciones comerciales al contenido público sin petición expresa de Sergio.
- Antes de editar: leer `README.md`, `docs/PROCESO_PUBLICACION.md` y `docs/INTEGRACIONES.md`; comprobar `git status`, la rama y `origin`. Conservar cualquier modificación previa.
- Para diseño, copy, SEO o conversión, leer `.agents/product-marketing.md` y `docs/METODO_WEB_MARKETING.md`; aplicar las skills pertinentes como criterio, contrastando sus propuestas con datos reales de esta web.
- Trabajar sobre esta copia y revisar la web local como visitante en escritorio y móvil. Comprobar navegación, formulario, idioma, enlaces y ausencia de desbordamiento horizontal.
- Ejecutar `python scripts/check_site.py`, `node --check app.js`, `node --check data.js` y `git diff --check` antes de cada publicación.
- Sergio ha pedido un ciclo continuo de cambios visibles: tras completar y verificar una iteración, integrar el remoto, crear commit, hacer push a `main` y comprobar `https://sergiogp.com/`. Comunicar la URL y el resultado real. Si un paso falla, dejar el estado exacto por escrito.
- Mantener `CNAME`, el destinatario del formulario y las URL canónicas salvo instrucción expresa. No subir secretos, datos de clientes, capturas locales ni documentos internos de `docs/privado/`.
- Las cifras comerciales, los resultados y las credenciales formativas deben contar con fuente verificable antes de cambiarse o ampliarse.
