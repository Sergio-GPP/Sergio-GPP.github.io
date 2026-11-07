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
   Si cambias contenido en `data.js`, ejecuta `node scripts/render_static_home.js` para mantener el HTML inicial en español. `check_site.py` comprueba esa sincronización.
   Si cambias `app.js`, `data.js` o `styles.css`, actualiza también la versión de su URL en `index.html` para evitar que el navegador reutilice una copia anterior.
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

Con JavaScript, el formulario guarda nombre, email y mensaje en `public."forms-sergiogp"` de Supabase mediante la Data API. La clave publicable no es secreta: RLS y permisos de columna impiden leer, modificar o borrar consultas desde la web. Solo redirige a `gracias.html` tras una respuesta HTTP correcta. Ante un error conserva el borrador, informa de que el guardado es incierto y ofrece el correo directo; no reintenta automáticamente porque el registro podría haberse confirmado en la base de datos antes del fallo de respuesta. Sin JavaScript se oculta el formulario y se muestra la dirección de correo. Verificar el registro real en Supabase tras cualquier cambio del formulario y eliminar solo los datos de prueba identificados.

El aviso que enviaba correo desde la agencia se retiró del disparador, de la cola y del servidor. La tabla conserva `chatgpt_alerted_at` para una posible tarea programada de ChatGPT. Hasta que esa tarea esté creada y verificada, revisar manualmente las nuevas filas en Supabase; no hay avisos automáticos activos. Si se activa una tarea, comprobar con un registro ficticio identificado tanto su ejecución como el marcado de ese registro, y eliminar después solo la prueba.
