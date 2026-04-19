/* ============================================
   The Editorial Academy — Global Scripts
   script.js
   ============================================ */

(function () {

  /* ─────────────────────────────────────────
     1. Auto-highlight active navbar link
     Baca nama file dari URL, cocokkan ke href nav.
     Fix: pakai optional chaining (?.) agar link
     tanpa href tidak crash.
  ───────────────────────────────────────── */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a').forEach(link => {
      // Optional chaining — aman kalau href null/undefined
      const linkPage = link.getAttribute('href')?.split('/').pop();

      if (linkPage === currentPage) {
        link.classList.remove('text-[#545f73]', 'font-medium');
        link.classList.add('nav-active');
      }
    });
  }

  /* ─────────────────────────────────────────
     2. Navbar shadow on scroll
     Tambah shadow-md saat user scroll ke bawah.
  ───────────────────────────────────────── */
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

  /* ─────────────────────────────────────────
     3. Mobile hamburger menu
     Siap pakai — aktif kalau ada elemen
     #hamburger-btn dan #mobile-menu di HTML.
  ───────────────────────────────────────── */
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

  /* ─────────────────────────────────────────
     4. Smooth scroll untuk anchor link (#)
  ───────────────────────────────────────── */
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

  /* ─────────────────────────────────────────
     5. Curricula Page — Course Data, Render & Pagination
     Hanya aktif kalau elemen #course-grid ada di halaman.
     24 courses: 5 Visual Narrative, 5 Digital Strategy,
     5 Editorial Design, 4 Typography, 5 Artificial Intelligence.
     Pagination: 6 card per halaman = 4 halaman.
  ───────────────────────────────────────── */
  function initCurriculaPage() {
    if (!document.getElementById('course-grid')) return;

    /* ── Data 24 Executive Programs ── */
    const courses = [

      /* Visual Narrative — 5 courses */
      {
        id: 1,
        category: 'Visual Narrative',
        badge: 'Bestseller',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 4.9,
        title: 'Minimalist Brand Identity',
        instructor: 'Anders Holm',
        role: 'Identity Specialist',
        price: 780,
        originalPrice: null,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC328zEPMuxx6FQEZC04AwhrAmv-wjLw25So06ZeGiRwJ_d0kh9kpbh154Yjtn-Sjm8QcrEMwzUPIro8097NuT2JEYAWlT72Mn6vHUlLQhD2ceFCmnvtkoPO6uqyWr9RXN4bLM9DKDABr-FSiMt9t2_Xvx8gl6CDmP3pnrAlcoaHU5kHPlJjgrMEYJj9o8I0zL3BG_Exx6dv4OsZTl1eD_rQQvkJb18w3xV2jCMcJOScYrLruAgHJWtnBjFVpsxr6o-LDjIHuA89Vc',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcqEOj23gISs_pTetyZyTuXSbt6twyCOVwHpJsZRTAFO55qVluXWsWuZiLGPUJNMGf-3pBr5zADgrSYgFoH4iyLC8j3H_Uc_MuHU2_7iEIqLDmS_Hl3qMm6G-r64yal6k-6wX4wXIJPX0G6DGW-EHAEEFTnayukEiMTfL6a_0SyDnuLtJsA5-u09ikkmigSpF_wdoAJ5ZcUXBdcdWyVXSb1e2r5m8qtHLoLvdysX4bSomP0QzshO5iuXjbCX13K3CPF0g15Fpxy6M',
      },
      {
        id: 2,
        category: 'Visual Narrative',
        badge: null,
        badgeStyle: null,
        rating: 4.6,
        title: 'Editorial Photography Mastery',
        instructor: 'Lydia Grant',
        role: 'Lead Photographer',
        price: 550,
        originalPrice: 750,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkUN2pqB7zXb2X8Notg2BV9FSSzwOVKa1jSDSG_M7jCGn1KgUtolFGpzIcYrg29B3OPsGqwUWIKbwddWwK018VKUanUOrkSvE-ugRCwn4lNnFUAGbrgp8u587guaanJi5cLUnaQylbUgbkW2koBR9lKQVsSwaBcDjapP9W4-0lP0dQg7uO1FwFXUw_qab93bx3V08aDnP73VJlhymKNKxW4Kd9vi6U6nwJ2rVZ3y9rx1EvYgmLIuWhWgSOwr92-g9sChvM6Bri2ak',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAagtMGjriXzIo3hvNtjVaXc2KMZWHhJih8LN3bfgZu-d2qd8WePWHrwHJ3o3k5PQqh5HV41j8E0bt3Bm7aGEC2O6lGJQQEYVKpi-JVYWxayn-JNE4z8qc4gymDRCkEKPafyTODsB1WP5oObFcSOe6qlERzWKAzgnZlK4t95cgX4zx_ir_UYJ7UBoHXjkjSoKUkUi5YgTukuxfwYd8QDgvL_30S-Ia4HugYRcuOhf6D_La__JQE64anHdx29Ysf0vZt7tv1-nZ10c0',
      },
      {
        id: 3,
        category: 'Visual Narrative',
        badge: 'New',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 4.8,
        title: 'The Language of Luxury Imagery',
        instructor: 'Celeste Aurore',
        role: 'Creative Director, Condé Nast',
        price: 1200,
        originalPrice: 1600,
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80',
      },
      {
        id: 4,
        category: 'Visual Narrative',
        badge: null,
        badgeStyle: null,
        rating: 4.7,
        title: 'Color Theory for Editorial Excellence',
        instructor: 'Naomi Sato',
        role: 'Art Director',
        price: 690,
        originalPrice: null,
        img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
      },
      {
        id: 5,
        category: 'Visual Narrative',
        badge: null,
        badgeStyle: null,
        rating: 4.9,
        title: 'Motion & Still: Cinematic Storytelling',
        instructor: 'Rafael Moreno',
        role: 'Film Director',
        price: 950,
        originalPrice: 1300,
        img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
      },

      /* Digital Strategy — 5 courses */
      {
        id: 6,
        category: 'Digital Strategy',
        badge: 'Bestseller',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 4.9,
        title: 'The Architecture of Digital Narrative',
        instructor: 'Julian Vane',
        role: 'Senior Editor',
        price: 850,
        originalPrice: 1200,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFc2amcUaCo-qDX-FrXZF7E1nDgif-xA9NEvpWwebHXhEyEgi8K8Qod9htdWb4pAMKPONrk6HEkShdCkhEDSihxvBOJkJECiXJYE1naA-mf0kJSG5AV00Z6r5nxi2uSR7cGk2viRzdFBV3IRviLk0hn4d9HI_PVQFnUbwo1Jnm1SMyxZCoESWi69efprliW5m786oGL2R4y2PvZVxXZOCWywinIMN9n4JMmnLwt8r9wpe6Z1ng9xVoJMHi6tz2b_03cPmGGHEJNxM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIuX_z51JF6VxwalJYJTLanaJ59HRYv787VmKPQzeUJFVNeZ8iUit5wb3LTFAV-KdtJW8HaeeZ2WiduL_0b7KMcig5_wrL2g4mvOloQaCxFryAmIvtr9HmG6o6hldnqKSMF6hvVz6Fhon-w48lWj3xI8nHuUWLebD4e0vMT0bVLdKnwRRMsJbkMpEoNURlB8cT6BIXE5C5m_OKYftsGHlLOuu_hb5Tw8MihKcwSr7PZRG14VX-Sg5VxgX8vT3ZtQDZCyfuoTc2DX0',
      },
      {
        id: 7,
        category: 'Digital Strategy',
        badge: null,
        badgeStyle: null,
        rating: 4.7,
        title: 'Algorithmic Content Curation',
        instructor: 'Sofia Chen',
        role: 'Tech Analyst',
        price: 920,
        originalPrice: null,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVxRRiK7mkXgBLpRe1QFW-lcwOcF2uaj5mC6m9qtAGdRI4S0WJ3w_6Q2ist6KmWu7i2v3a4uophPr6xY5gI3_TyRlm3Ebst8Y1ZfFQvEfsNMw-En29R5NSk_JuvN4zpwiezEAfEBmyGGGjiGSENcyGaFez2TeJ5ZScweaa675Qq7IjL8Vh5-nQWvOmGBvmBStG-TjxPFZGYAmq3wjlt2F-FlGoiLyruenU9-ByV9Wd25lE0tYtVBz2jvhFH_Ov2RJoK6Siqj98jco',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVzt_JDg1K9vbRbEsfMWpI4oCgF6e4CEqcKk4RYAVVGFJvhdQgu1Aqwp2UHdxqCFehpCNKhFg4FUKKjzIAF4iipsyLBCjHkZAiS9k-ga-12JRt1FjO4qR7gUMlWrB48_4F3kDYnNxu0btbgNuBhdSKprQjvEU3PSDZwJQ1MbZ4sgU7OPdIlxt1pDbLru_Pnnoozz_ZnQ2qNA-LB6WjBy5ZiDxXntahItzFjxWrMnEJ1p3ot-B2Zl6TS8kitTDRsTIkVt8ES9IeevE',
      },
      {
        id: 8,
        category: 'Digital Strategy',
        badge: 'Pro',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 4.8,
        title: 'Monetising Digital Media at Scale',
        instructor: 'Marcus Elliot',
        role: 'VP Strategy, Bloomberg Media',
        price: 1450,
        originalPrice: 1900,
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
      },
      {
        id: 9,
        category: 'Digital Strategy',
        badge: null,
        badgeStyle: null,
        rating: 4.6,
        title: 'Audience Intelligence & Data Storytelling',
        instructor: 'Priya Nair',
        role: 'Head of Insights, Reuters',
        price: 870,
        originalPrice: null,
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cd?w=80&q=80',
      },
      {
        id: 10,
        category: 'Digital Strategy',
        badge: null,
        badgeStyle: null,
        rating: 4.9,
        title: 'Executive Presence in the Digital Age',
        instructor: 'Thomas Whitfield',
        role: 'CMO, Financial Times',
        price: 1600,
        originalPrice: 2100,
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
      },

      /* Editorial Design — 5 courses */
      {
        id: 11,
        category: 'Editorial Design',
        badge: null,
        badgeStyle: null,
        rating: 4.8,
        title: 'Modern Magazine Layouts',
        instructor: 'Marcus Thorne',
        role: 'Creative Director',
        price: 650,
        originalPrice: 890,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkFWFclxWnPx_quCcURPmxlbQ9-XOHUI6FX9iZc5qisEraEG0oDutux0q8CNz1DK9Hck5LpUlTsggrMB1Nww6AK42hTpcATBRX1XJD4kgHuNDiFNovxoH9AK_mVNKYpz6YQwafgCL39wZxa7oLDBHpL0diGbQ191Mp8Ugui2nVyQqXS1QeOAFKnlG8r7JbRYKTSkMhJioHVwRhMzp5EQnmoeCxK9OlvVajc6P8wdTH6dOBKeHaMfvce4G4rbvxcQngD4XgxW8wMU',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_7bxPu8GRTNyVqxvYPZYM0VxVMbpk7FY2ZGmiJhwbOsPKOQPpFGvavP6TcVkjjxaVn0_RYOJZGYO5o0LqV_Rb8GcSBf49-4pis_sVrCf4Qqbv2wd0IR32C1OmUqgr0aq5_wWqbfxVRzbPMXM7bZOgFolF28LWNrqc6B1sIfTWGOEXC77clM4QKHrTi-GpeK8WQm2HneNQcS7K0Vo_B4z5CYOy3b_mCzIHxcsMfoP11AeCngObF9YT6b9Ln7NkSn9GI70Z59SUqII',
      },
      {
        id: 12,
        category: 'Editorial Design',
        badge: 'Bestseller',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 5.0,
        title: 'Grid Systems & White Space Mastery',
        instructor: 'Ingrid Larsen',
        role: 'Design Director, Vogue Scandinavia',
        price: 1050,
        originalPrice: 1400,
        img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
      },
      {
        id: 13,
        category: 'Editorial Design',
        badge: null,
        badgeStyle: null,
        rating: 4.7,
        title: 'Print to Digital: Transitional Design',
        instructor: 'Olivier Dumont',
        role: 'Senior Designer, Le Monde',
        price: 720,
        originalPrice: null,
        img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&q=80',
      },
      {
        id: 14,
        category: 'Editorial Design',
        badge: null,
        badgeStyle: null,
        rating: 4.8,
        title: 'Cover Design: The Art of First Impression',
        instructor: 'Alicia Monroe',
        role: 'Art Director, TIME Magazine',
        price: 880,
        originalPrice: 1100,
        img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80',
      },
      {
        id: 15,
        category: 'Editorial Design',
        badge: 'Pro',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 4.9,
        title: 'Interactive Editorial: UX for Long-Form',
        instructor: 'Kwame Osei',
        role: 'Digital Design Lead, The Guardian',
        price: 1300,
        originalPrice: 1750,
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80',
      },

      /* Typography — 4 courses */
      {
        id: 16,
        category: 'Typography',
        badge: 'Pro',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 5.0,
        title: 'Advanced Glyphs & Visual Systems',
        instructor: 'Dr. Elena Rossi',
        role: 'Type Designer',
        price: 1100,
        originalPrice: null,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPoZCpRc20NNFWWcYBrWBp6sGRf4SVJGYKwA0W8O6Pou_N5k1ZIaNCvroLzxW-9eX3rPGt3QCHEC-Aaj3790K5wVKz8FqplMAmM4_ifzFc7WSjXxzJfnu9LVsHL5wULR-66Bs9jjIMX7WnNsPZoGFF7LZ0u0g0gSv8W2AYYOaplI0JcuS10LSE1UkCKplAGYAc1iGqd9UhsML__neUeSdbq41isnCWbukc-lR_DFBv1ArX5qfM6gEEnr1IJU2SH-JXOmVsp_epFdM',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPz8_78Edzn5b-e_DxzPMTrtkfWfNvSU7UMDjp0VQof-tje2OSPJMakAOG-1WRPz-F0xHLb4Wr4x_bP6DJVfmBBlrGS2oXQdcP9XNpy6jXsKR9zPoFmCJVBK-b7mGwxOlhnQISuROkDsTGCuQEWr7L4cwJ0OUQB5V73UL8Se_OiLSzC3AUggVJL5DcET-744u5fF64ZPMiSgamFBCIw7uSJLDYoZfVpmUf9jBTjnrUubw6BTnqanlhU5vswiZUocjzdaK4f2FFPQ',
      },
      {
        id: 17,
        category: 'Typography',
        badge: null,
        badgeStyle: null,
        rating: 4.8,
        title: 'Type as Image: Expressive Letterforms',
        instructor: 'Hana Yamamoto',
        role: 'Type Director, Monocle',
        price: 830,
        originalPrice: 1050,
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80',
      },
      {
        id: 18,
        category: 'Typography',
        badge: null,
        badgeStyle: null,
        rating: 4.7,
        title: 'Variable Fonts & the Future of Reading',
        instructor: 'Sven Albers',
        role: 'Lead Typeface Engineer',
        price: 760,
        originalPrice: null,
        img: 'https://images.unsplash.com/photo-1583591186010-9d27f50a9c4a?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&q=80',
      },
      {
        id: 19,
        category: 'Typography',
        badge: 'New',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 4.9,
        title: 'Heritage Typefaces: History & Application',
        instructor: 'Prof. Beatrice Wren',
        role: 'Typography Historian, Oxford',
        price: 990,
        originalPrice: 1200,
        img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80',
      },

      /* Artificial Intelligence — 5 courses */
      {
        id: 20,
        category: 'Artificial Intelligence',
        badge: 'New',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 5.0,
        title: 'Generative AI for Editorial Leaders',
        instructor: 'Dr. Amara Okafor',
        role: 'Head of AI, The Atlantic',
        price: 1800,
        originalPrice: 2400,
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80',
      },
      {
        id: 21,
        category: 'Artificial Intelligence',
        badge: 'Bestseller',
        badgeStyle: 'bg-primary text-on-primary',
        rating: 4.9,
        title: 'AI-Augmented Content Strategy',
        instructor: 'Leon Hartmann',
        role: 'Chief AI Officer, Axel Springer',
        price: 1650,
        originalPrice: 2100,
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',
      },
      {
        id: 22,
        category: 'Artificial Intelligence',
        badge: 'Pro',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 4.8,
        title: 'Machine Perception & Visual Intelligence',
        instructor: 'Dr. Yuki Tanaka',
        role: 'Research Scientist, DeepMind',
        price: 2200,
        originalPrice: 2900,
        img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80',
      },
      {
        id: 23,
        category: 'Artificial Intelligence',
        badge: null,
        badgeStyle: null,
        rating: 4.9,
        title: 'Ethical AI in Modern Newsrooms',
        instructor: 'Prof. Isabelle Laurent',
        role: 'AI Ethics Chair, Sciences Po',
        price: 1400,
        originalPrice: null,
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80',
      },
      {
        id: 24,
        category: 'Artificial Intelligence',
        badge: 'Pro',
        badgeStyle: 'bg-tertiary text-on-primary',
        rating: 4.8,
        title: 'Prompt Engineering for Creative Executives',
        instructor: 'Nathan Cole',
        role: 'Director of AI Products, Adobe',
        price: 1950,
        originalPrice: 2600,
        img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80',
      },
    ];

    const COURSES_PER_PAGE = 6;
    let currentPage = 1;
    let filteredCourses = [...courses];

    /* ── Render satu card ── */
    function renderCard(course) {
      const priceHTML = course.originalPrice
        ? `<span class="text-xl font-bold text-black">$${course.price.toLocaleString()}</span>
           <span class="text-sm text-outline line-through">$${course.originalPrice.toLocaleString()}</span>`
        : `<span class="text-xl font-bold text-black">$${course.price.toLocaleString()}</span>`;

      const badgeHTML = course.badge
        ? `<div class="absolute top-4 left-4">
             <span class="px-3 py-1 ${course.badgeStyle} text-[10px] font-bold tracking-widest uppercase rounded-sm">${course.badge}</span>
           </div>`
        : '';

      return `
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-container-low">
            <img
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="${course.img}"
              alt="${course.title}"
              onerror="this.src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'"
            />
            ${badgeHTML}
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-tighter uppercase rounded-full">
                ${course.category}
              </span>
              <div class="flex items-center gap-1 text-tertiary">
                <span class="material-symbols-outlined text-xs" style="font-variation-settings:'FILL' 1">star</span>
                <span class="text-xs font-bold">${course.rating.toFixed(1)}</span>
              </div>
            </div>
            <h3 class="text-2xl font-headline font-bold text-black leading-snug group-hover:underline underline-offset-8">
              ${course.title}
            </h3>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                <img
                  class="w-full h-full object-cover"
                  src="${course.avatar}"
                  alt="${course.instructor}"
                  onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'"
                />
              </div>
              <span class="text-sm font-medium text-secondary">
                ${course.instructor}, <span class="italic">${course.role}</span>
              </span>
            </div>
            <div class="flex items-center gap-3 pt-2">${priceHTML}</div>
          </div>
        </div>
      `;
    }

    /* ── Render grid + pagination untuk halaman aktif ── */
    function renderPage() {
      const grid = document.getElementById('course-grid');
      const pagination = document.getElementById('pagination');
      const countEl = document.getElementById('course-count');

      const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
      const start = (currentPage - 1) * COURSES_PER_PAGE;
      const pageCourses = filteredCourses.slice(start, start + COURSES_PER_PAGE);

      // Update jumlah course
      if (countEl) countEl.textContent = filteredCourses.length;

      // Render cards
      grid.innerHTML = pageCourses.length > 0
        ? pageCourses.map(renderCard).join('')
        : '<p class="text-secondary col-span-3 py-24 text-center">No programs match your filters.</p>';

      // Render pagination — skip kalau hanya 1 halaman
      if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
      }

      // Build page buttons dengan ellipsis
      let pagesHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage;
        const isVisible = i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1);
        const isEllipsis = i === currentPage - 2 || i === currentPage + 2;

        if (isVisible) {
          pagesHTML += `
            <button data-page="${i}"
              class="w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold transition-all
              ${isActive ? 'bg-primary text-on-primary' : 'text-secondary hover:bg-surface-container'}">
              ${i}
            </button>`;
        } else if (isEllipsis) {
          pagesHTML += `<span class="px-2 text-outline">...</span>`;
        }
      }

      pagination.innerHTML = `
        <button id="prev-page"
          class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-secondary hover:border-black hover:text-black transition-all
          ${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <div class="flex items-center gap-2">${pagesHTML}</div>
        <button id="next-page"
          class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-secondary hover:border-black hover:text-black transition-all
          ${currentPage === totalPages ? 'opacity-30 pointer-events-none' : ''}">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      `;

      /* ── Attach pagination events setelah render ── */
      pagination.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
          currentPage = parseInt(btn.dataset.page);
          renderPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      document.getElementById('prev-page')?.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      document.getElementById('next-page')?.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    /* ── Filter: apply kategori yang dicentang ── */
    function applyFilters() {
      const checked = [...document.querySelectorAll('#category-filters input:checked')].map(cb => cb.value);
      const searchQuery = document.getElementById('search-input')?.value.toLowerCase().trim() || '';

      filteredCourses = courses.filter(c => {
        const matchCategory = checked.length === 0 || checked.includes(c.category);
        const matchSearch = searchQuery === '' || c.title.toLowerCase().includes(searchQuery) || c.instructor.toLowerCase().includes(searchQuery);
        return matchCategory && matchSearch;
      });

      currentPage = 1;
      renderPage();
    }

    // Event: category checkboxes
    document.querySelectorAll('#category-filters input').forEach(cb => {
      cb.addEventListener('change', applyFilters);
    });

    // Event: search input (debounced 300ms)
    let searchTimeout;
    document.getElementById('search-input')?.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(applyFilters, 300);
    });

    // Event: sort select
    document.getElementById('sort-select')?.addEventListener('change', function () {
      if (this.value === 'Price: High to Low') {
        filteredCourses.sort((a, b) => b.price - a.price);
      } else if (this.value === 'Latest Release') {
        filteredCourses.sort((a, b) => b.id - a.id);
      } else {
        // Default: Most Prestigious = sort by rating desc
        filteredCourses.sort((a, b) => b.rating - a.rating);
      }
      currentPage = 1;
      renderPage();
    });

    // Event: clear filters button (pakai id bukan class selector yang fragile)
    document.getElementById('clear-filters')?.addEventListener('click', () => {
      document.querySelectorAll('#category-filters input').forEach(cb => cb.checked = false);
      const searchEl = document.getElementById('search-input');
      if (searchEl) searchEl.value = '';
      applyFilters();
    });

    // ── Render awal ──
    renderPage();
  }

  /* ─────────────────────────────────────────
     Init — jalankan semua fungsi saat DOM siap
  ───────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    handleNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    initCurriculaPage(); // hanya aktif di curricula.html
  });

})();