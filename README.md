# NovaTech — Frontend Project

🌐 **Web en vivo:** [https://Rau0415.github.io/novatech-web](https://Rau0415.github.io/novatech-web)

---

## Paleta de Colores

| Token CSS | Valor | Uso |
|---|---|---|
| `--nt-purple` | `#7c3aed` | Color primario — violeta (sustituye al azul Bootstrap) |
| `--nt-cyan` | `#06b6d4` | Color secundario — acento cian |
| `--nt-bg` | `#0a0a0f` | Fondo principal — negro profundo |
| `--nt-text` | `#e2e8f0` | Texto principal |
| `--nt-pink` | `#f0abfc` | Acento decorativo — rosa neón |

**Justificación:** La identidad "cyberpunk tech" de NovaTech requería alejarse del azul genérico de Bootstrap. El violeta transmite innovación y creatividad; el cian aporta el contraste frío y tecnológico característico del género. Ambos colores superan el ratio de contraste WCAG AA (4.5:1) sobre fondo oscuro.

---

## Parte más difícil de investigar e implementar

**El efecto glitch en el título del hero** (`css/style.css`, líneas ~277-303) fue el reto más interesante. Requirió entender el pseudo-elemento `::before`/`::after` con `content: attr(data-text)` para duplicar el texto, `clip-path: polygon()` para recortar bandas horizontales y `@keyframes` con timing asíncrono para simular el desplazamiento errático de una señal corrupta, sin usar JavaScript ni SVG.

El segundo reto fue el **grid asimétrico de servicios** (`css/style.css`, líneas ~357-380): combinar CSS Grid Layout nativo (no el grid de Bootstrap) con `grid-column: span N` distinto por cada hijo requirió entender `grid-template-columns: repeat(12, 1fr)` y gestionar los breakpoints para que colapsara correctamente en mobile sin romper el layout de Bootstrap.

---

## Animaciones CSS3 personalizadas

Todas las animaciones están en `css/style.css`:

| Animación | `@keyframes` | Línea aprox. | Descripción |
|---|---|---|---|
| Partículas flotantes | `floatParticle` | ~239 | 12 partículas ascienden con rotación en el hero |
| Fade-up de texto | `fadeUp` | ~327 | Aparición del tagline, título, subtítulo y CTA |
| Efecto glitch | `glitch` | ~297 | Distorsión del texto "Next-Gen" |
| Scroll indicator | `scrollPulse` | ~321 | Línea pulsante de scroll |
| Shimmer en progress bars | `shimmer` | ~772 | Brillo deslizante en barras de progreso del dashboard |

---

## Estructura del Proyecto

```
novatech-web/
├── index.html           ← Landing Page (Hero, Servicios, Portfolio, Contacto)
├── dashboard.html       ← Panel de Control interno
├── css/
│   └── style.css        ← Variables CSS, animaciones, dark mode, todos los estilos
├── js/
│   └── main.js          ← Dark/light toggle, validación, tooltips, toasts
├── img/
│   ├── circuit-board.jpg
│   ├── dark-ui.jpg
│   ├── terminal.jpg
│   ├── hologram.jpg
│   ├── neural.jpg
│   └── cyberpunk-city.jpg
└── README.md
```

---

## Componentes Bootstrap utilizados

- **Navbar** con collapse responsive y menú hamburguesa con fondo personalizado
- **Cards** en sección de servicios
- **Modal** en portfolio (×6)
- **Form validation** (`.is-valid` / `.is-invalid`)
- **Offcanvas** en dashboard mobile
- **Accordion** en panel de sistema
- **Progress Bars** en tabla y métricas
- **Toasts** en landing (confirmación formulario) y dashboard
- **Tooltips** en acciones rápidas del dashboard

---

## Modo Oscuro / Claro

Implementado mediante el atributo `data-bs-theme` de Bootstrap 5.3 en el elemento `<html>`. El toggle en `js/main.js` conmuta entre `dark` y `light` y persiste la preferencia en `localStorage`. Las variables CSS de `:root` se sobreescriben en `[data-bs-theme="light"]`.

---

## Accesibilidad

- `aria-label` en todos los botones sin texto visible
- `aria-current="page"` en el enlace activo del sidebar
- `aria-expanded` en el accordion
- `role="progressbar"` con `aria-valuenow` en todas las barras
- `aria-live="assertive"` en los toasts
- Navegación por teclado en galería (Enter/Espacio abre el modal)
- Ratios de contraste WCAG AA verificados