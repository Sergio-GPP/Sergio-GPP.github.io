# Miniaturas de los casos de éxito

## Objetivo y alcance

En la portada, las imágenes deben identificar el tema del caso en un vistazo, incluso a 320 px de ancho. Los cinco casos enlazados usan ilustraciones sin texto, marcas ni datos de clientes. Los esquemas y explicaciones dentro de cada caso permanecen como estaban.

| Caso de la portada | Archivo |
| --- | --- |
| CRM Comercial Interno | `img/case-thumb-crm-v2.webp` |
| Email Marketing con IA | `img/case-thumb-email-v2.webp` |
| Sistema Automatizado de Remarketing | `img/case-thumb-remarketing-v2.webp` |
| Chatbots y Asistentes | `img/case-thumb-chatbot-v2.webp` |
| Redes Sociales con IA | `img/case-thumb-editorial-v2.webp` |

## Conceptos y prompts de esta serie

Se usó la skill `imagegen` con la herramienta integrada. La pauta común fue: ilustración editorial 3D de un único motivo central, fondo casi negro, materiales mate, luz verde lima contenida, alto contraste, formato horizontal 4:3, sin interfaces, tarjetas, texto, logotipos, datos reales ni marcas de agua.

- **CRM:** núcleo de anillos conectados con personas, campañas y prospección.
- **Email:** un sobre grande que conecta con varios grupos de destinatarios.
- **Remarketing:** flecha de retorno hacia una audiencia seleccionada y control humano antes del envío.
- **Chatbot:** dos bocadillos de conversación conectados.
- **Editorial:** lápiz y hoja de borrador con revisión humana, sin sugerir publicación automática.

Los PNG originales generados se conservaron fuera del repositorio. Las versiones publicadas se redimensionaron a 960 × 720 píxeles y se exportaron a WebP (calidad 84); ocupan aproximadamente 47–62 KB cada una. El cambio de formato y tamaño es técnico, sin modificar la escena. No se han sustituido los SVG utilizados dentro de los casos.

## Integración y revisión

`data.js` referencia estas imágenes en español e inglés. `app.js` declara 960 × 720 y mantiene carga diferida (`loading="lazy"`) y decodificación asíncrona. `styles.css` recorta con `object-fit: cover` en 4:3 para escritorio y 16:10 para móvil.

Para otra iteración: generar un motivo reconocible por caso, optimizarlo, cambiar ambas referencias de `data.js`, comprobar imágenes y enlaces en local a 320 px y escritorio, ejecutar `python scripts/check_site.py`, `node --check app.js`, `node --check data.js` y `git diff --check`, hacer commit/push a `main` y verificar el dominio publicado. El procedimiento general está en `docs/PROCESO_PUBLICACION.md`.
