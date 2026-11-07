# Integraciones y dependencias de la web

| Elemento | Uso actual | Comprobación / precaución |
| --- | --- | --- |
| GitHub `Sergio-GPP/Sergio-GPP.github.io` | Código y publicación de la web estática | `main`, remoto `origin`, `CNAME` |
| GitHub Pages | Sirve `sergiogp.com` | Comprobar contenido en producción tras cada push |
| DNS gestionado por servidores `dns-parking.com` | Resolución del dominio | Verificar registros antes de modificar DNS; las IP actuales corresponden a GitHub Pages |
| Supabase (proyecto existente, tabla `public."forms-sergiogp"`) | Guarda nombre, email y mensaje del formulario en región UE; sin JavaScript se muestra el correo directo | Clave publicable en el navegador; `anon` solo puede insertar tres columnas, con RLS y restricciones de longitud. No hay lectura pública. Redirigir a `gracias.html` solo tras respuesta HTTP correcta; ante error conservar el texto y evitar reintentos automáticos del formulario. Revisar el registro real en la tabla tras cambios; no guardar mensajes en Git |
| Supabase `pg_net` y `pg_cron` → función privada de Vercel → Hostinger Mail | Tras guardar una fila, envía a `sergio@sergiogp.com` un aviso con nombre, email y mensaje desde el buzón existente `proyectos@aldrax.es` | El secreto del webhook vive en Supabase Vault y en variables privadas de Vercel. Una cola comprueba pendientes cada cinco minutos. El estado `sent` evita duplicados; `unknown` requiere revisión manual y nunca se reenvía automáticamente. El envío comercial de Aldrax sigue desactivado |
| Cloudinary | Fotos públicas de Sergio | Comprobar que las URL cargan y que su uso sigue autorizado |
| Google Fonts | Inter, Sora y JetBrains Mono | Recurso externo; revisar rendimiento y privacidad si se cambia |
| LinkedIn e Instagram | Enlaces públicos del perfil | Revisar que apuntan a los perfiles correctos |

La web sigue siendo estática y no contiene secretos; el aviso usa la función privada de Vercel que ya existe en la infraestructura de Sergio. `data.js` guarda contenido visible y traducciones, no credenciales. La documentación comparativa o estratégica de trabajo local se guarda en `docs/privado/` y queda fuera de Git.
