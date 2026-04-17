/* ============================================
   The Editorial Academy — Global Scripts
   script.js
   ============================================ */

(function () {

  /* ── 1. Auto-highlight active navbar link ── */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a').forEach(link => {
      const linkPage = link.getAttribute('href')?.split('/').pop();

      if (linkPage === currentPage) {
        // Hapus Tailwind inline color classes dulu biar tidak bentrok
        link.classList.remove('text-[#545f73]', 'font-medium');
        // Tambah class CSS aktif dari style.css
        link.classList.add('nav-active');
      }
    });
  }

  /* ── 2. Navbar shadow on scroll ── */
  function handleNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
      } else {
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('shadow-md');
      }
    });
  }

  /* ── 3. Mobile hamburger menu (siap pakai jika nanti ditambah) ── */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ── 4. Smooth scroll untuk anchor link ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Init semua fungsi saat DOM siap ── */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    handleNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
  });

})();