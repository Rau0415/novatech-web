document.addEventListener('DOMContentLoaded', () => {

  // ── 1. DARK / LIGHT MODE ───
  const html        = document.documentElement;
  const toggleBtn   = document.getElementById('themeToggle');
  const toggleIcon  = document.getElementById('themeIcon');
  const toggleBtnD  = document.getElementById('themeToggleDash');
  const toggleIconD = document.getElementById('themeIconDash');

  /**
   * Aplica el tema al atributo data-bs-theme del <html>
   * y actualiza el icono del botón.
   * @param {'dark'|'light'} theme
   */
  function applyTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('nt-theme', theme);

    const icon = theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill';
    if (toggleIcon)  { toggleIcon.className  = `bi ${icon}`; }
    if (toggleIconD) { toggleIconD.className = `bi ${icon}`; }
  }

  // Carga la preferencia guardada 
  const savedTheme = localStorage.getItem('nt-theme') || 'dark';
  applyTheme(savedTheme);

  // Evento del toggle 
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-bs-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
  // Evento del toggle 
  if (toggleBtnD) {
    toggleBtnD.addEventListener('click', () => {
      const current = html.getAttribute('data-bs-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ── 2. NAVBAR SCROLL EFFECT ──
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ── 3. VALIDACIÓN DEL FORMULARIO DE CONTACTO ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Activa la validación visual de Bootstrap
      contactForm.classList.add('was-validated');

      if (contactForm.checkValidity()) {
        // Muestra el toast de confirmación
        const toastEl = document.getElementById('formToast');
        if (toastEl) {
          const toast = new bootstrap.Toast(toastEl, { delay: 5000 });
          toast.show();
        }
        // Resetea el formulario tras 600ms
        setTimeout(() => {
          contactForm.reset();
          contactForm.classList.remove('was-validated');
        }, 600);
      }
    });
  }

  // ── 4. TOAST DEL DASHBOARD ──
  const showToastBtn = document.getElementById('showToastBtn');
  if (showToastBtn) {
    showToastBtn.addEventListener('click', () => {
      const toastEl = document.getElementById('dashToast');
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl, { delay: 5000 });
        toast.show();
      }
    });
  }

  // ── 5. INICIALIZACIÓN DE TOOLTIPS ──
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(el => {
    new bootstrap.Tooltip(el, {
      trigger: 'hover focus',   
    });
  });

  // ── 6. GALERÍA: ACTIVAR MODAL ──
  const galleryItems = document.querySelectorAll('.nt-gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

});
