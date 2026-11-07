# Integraciones y dependencias de la web

| Elemento | Uso actual | Comprobación / precaución |
| --- | --- | --- |
| GitHub `Sergio-GPP/Sergio-GPP.github.io` | Código y publicación de la web estática | `main`, remoto `origin`, `CNAME` |
| GitHub Pages | Sirve `sergiogp.com` | Comprobar contenido en producción tras cada push |
| DNS gestionado por servidores `dns-parking.com` | Resolución del dominio | Verificar registros antes de modificar DNS; las IP actuales corresponden a GitHub Pages |
| Supabase (proyecto existente, tabla `public."forms-sergiogp"`) | Guarda nombre, email y mensaje del formulario en región UE; sin JavaScript se muestra el correo directo | Clave publicable en el navegador; `anon` solo puede insertar tres columnas, con RLS y restricciones de longitud. No hay lectura pública. Redirigir a `gracias.html` solo tras respuesta HTTP correcta; ante error conservar el texto y evitar reintentos automáticos del formulario. Revisar el registro real en la tabla tras cambios; no guardar mensajes en Git |
| Avisos personales de formularios | El antiguo envío por correo se retiró. La tabla conserva `chatgpt_alerted_at` para una posible tarea de ChatGPT; todavía no hay aviso automático activo | Confirmar en Tareas programadas que la tarea consulta solo `forms-sergiogp`, que no emite avisos vacíos y que marca exclusivamente los registros comunicados |
| Cloudinary | Fotos públicas de Sergio | Comprobar que las URL cargan y que su uso sigue autorizado |
| Google Fonts | Inter, Sora y JetBrains Mono | Recurso externo; revisar rendimiento y privacidad si se cambia |
| LinkedIn e Instagram | Enlaces públicos del perfil | Revisar que apuntan a los perfiles correctos |

La web sigue siendo estática y no contiene secretos ni conexiones con la agencia. `data.js` guarda contenido visible y traducciones, no credenciales. La documentación comparativa o estratégica de trabajo local se guarda en `docs/privado/` y queda fuera de Git.
