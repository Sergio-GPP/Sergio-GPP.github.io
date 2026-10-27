# Proceso de edición y publicación

## Estado y fuentes

- Código: `https://github.com/Sergio-GPP/Sergio-GPP.github.io`.
- Rama de trabajo y publicación: `main`.
- Producción: `https://sergiogp.com/`.
- Publicación: GitHub Pages; el repositorio contiene `CNAME` con `sergiogp.com`. El DNS resuelve a las cuatro IP de GitHub Pages y usa `ns1.dns-parking.com` / `ns2.dns-parking.com` como servidores de nombres. Hostinger interviene en el DNS, no en la entrega de estos archivos.

## Cada iteración

1. `git status --short`, `git branch -vv` y `git remote -v`. Revisar los cambios locales y conservarlos.
2. Si el árbol está limpio: `git pull --ff-only origin main`. Si hay cambios locales: `git fetch origin main`, inspeccionar `git log --oneline --left-right HEAD...origin/main` y reconciliar sin sobrescribirlos.
3. Editar en esta carpeta. Para ver la web: `python -m http.server 8765 --bind 127.0.0.1` y abrir `http://127.0.0.1:8765/`.
4. Revisar en móvil estrecho y escritorio: inicio, menú, ES/EN, secciones, casos, formulario, enlaces y `prefers-reduced-motion`. Mirar con el navegador si hay errores de consola o imágenes rotas.
5. Ejecutar:

   ```powershell
   python scripts/check_site.py
   node --check app.js
   node --check data.js
   git diff --check
   ```

6. Revisar `git diff` y `git status --short`; añadir solo archivos previstos. Crear un commit descriptivo y `git push origin main`.
7. Verificar que `git ls-remote origin refs/heads/main` coincide con `git rev-parse HEAD`. Esperar a que producción sirva el cambio y comprobar la portada, una página de caso, `robots.txt`, `sitemap.xml` y el formulario sin enviar mensajes de prueba innecesarios.
8. Comunicar URL, commit, pruebas y pendientes reales. Si hace falta revertir, crear un nuevo commit con `git revert <hash>` y publicar ese commit; no reescribir la historia pública.

## Formulario

El formulario hace POST a FormSubmit para `sergio@sergiogp.com` y redirige a `gracias.html`. Confirmar la recepción en el buzón tras cualquier cambio del formulario o del servicio. El código estático por sí solo no acredita que el correo llegue.
