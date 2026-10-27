# Método de trabajo web y marketing

Este repositorio se revisa como producto y como código. Las skills están instaladas en el perfil local de Codex; el contenido y los controles propios del proyecto quedan aquí para que el método sea repetible.

## Skills disponibles desde la siguiente conversación

| Área | Skill | Fuente | Versión comprobada |
| --- | --- | --- | --- |
| Navegador y pruebas de flujos | `playwright` | [openai/skills](https://github.com/openai/skills/tree/main/skills/.curated/playwright) | Skill oficial instalada el 27-10-2026 |
| Textos de páginas y casos | `copywriting` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting) | 2.3.1 |
| SEO técnico y de contenido | `seo-audit` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit) | 2.2.2 |
| Claridad y conversión | `cro` | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/main/skills/cro) | 2.0.3 |
| Ilustraciones de casos | `imagegen` | Skill integrada de Codex | Disponible el 27-10-2026 |
| Revisión de interfaz | `web-design-guidelines` | Skill local de Codex | Disponible el 27-10-2026 |

Estas skills aportan listas de comprobación, enfoques y generación visual; cualquier resultado debe contrastarse con el código, el navegador y las pruebas del proyecto. Las versiones pueden cambiar si se actualizan las skills.

## Ciclo de cada mejora

1. **Objetivo y evidencia.** Leer `.agents/product-marketing.md`, petición de Sergio y fuentes del caso. Definir la acción que debe facilitar la página. Separar hechos confirmados de hipótesis.
2. **Diseño y texto.** Revisar jerarquía visual, tipografía, contraste, continuidad de secciones y un CTA principal. Redactar desde el beneficio concreto y explicar cómo funciona. No añadir cifras sin fuente.
3. **Implementación.** Mantener HTML semántico, enlaces reales, idioma, metadatos, imágenes con dimensiones y estado visible sin depender de animaciones. Evitar dependencias innecesarias.
4. **Prueba como visitante.** Abrir portada y páginas afectadas en escritorio y móviles de 320–390 px; probar menú, ES/EN, enlaces, formulario sin enviar datos reales, foco de teclado y movimiento reducido. Comprobar imágenes y desbordamiento horizontal.
5. **SEO y confianza.** Verificar título, H1, descripción, canonical, OG, enlaces internos, sitemap y alcance exacto de cada caso. Explicar lo entregado y lo que aún depende de una instalación o validación.
6. **Publicación.** Ejecutar los controles de `docs/PROCESO_PUBLICACION.md`, hacer commit y push, y comprobar el dominio servido. Guardar capturas locales de referencia y anotar cualquier pendiente verificable.

## Qué medir antes de optimizar conversiones

No interpretar una mejora visual como mejora comercial demostrada. Cuando Sergio habilite analítica con consentimiento y configuración aprobada, definir eventos mínimos: visitas a casos, clics de contacto y envío confirmado del formulario. Comparar periodos y volumen antes de atribuir cambios a una variante. Hasta entonces, priorizar claridad y eliminar fallos observables.
