# Integraciones y dependencias de la web

| Elemento | Uso actual | Comprobación / precaución |
| --- | --- | --- |
| GitHub `Sergio-GPP/Sergio-GPP.github.io` | Código y publicación de la web estática | `main`, remoto `origin`, `CNAME` |
| GitHub Pages | Sirve `sergiogp.com` | Comprobar contenido en producción tras cada push |
| DNS gestionado por servidores `dns-parking.com` | Resolución del dominio | Verificar registros antes de modificar DNS; las IP actuales corresponden a GitHub Pages |
| FormSubmit | Envía el formulario a `sergio@sergiogp.com` | Verificar recepción real en el buzón tras cambios; no guardar mensajes en Git |
| Cloudinary | Fotos públicas de Sergio | Comprobar que las URL cargan y que su uso sigue autorizado |
| Google Fonts | Space Grotesk, JetBrains Mono y Sora | Recurso externo; revisar rendimiento y privacidad si se cambia |
| LinkedIn e Instagram | Enlaces públicos del perfil | Revisar que apuntan a los perfiles correctos |

No hay backend propio ni secretos necesarios para servir esta versión estática. `data.js` guarda contenido visible y traducciones, no credenciales. La documentación comparativa o estratégica de trabajo local se guarda en `docs/privado/` y queda fuera de Git.
