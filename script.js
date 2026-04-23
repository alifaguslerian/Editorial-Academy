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
    initLibraryPage();   // hanya aktif di library.html
    initInstructorsPage(); // hanya aktif di instructors.html
    initCertificationsPage(); // hanya aktif di certifications.html
  });
  /* ─────────────────────────────────────────
       7. Library Page — Resources & Instructor Masterworks
       Hanya aktif kalau #resource-grid ada di halaman.
    ───────────────────────────────────────── */
  function initLibraryPage() {
    if (!document.getElementById('resource-grid')) return;

    const resources = [
      { id: 1, type: 'Article', discipline: 'Editorial Design', access: 'Free', featured: true, title: 'The Death of the Homepage: Rethinking Editorial Entry Points', excerpt: 'As algorithmic feeds replace direct navigation, the traditional homepage loses its authority. A deep investigation into what replaces it and what that means for editorial identity.', author: 'Julian Vane', authorRole: 'Senior Editor', readTime: '14 min read', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIuX_z51JF6VxwalJYJTLanaJ59HRYv787VmKPQzeUJFVNeZ8iUit5wb3LTFAV-KdtJW8HaeeZ2WiduL_0b7KMcig5_wrL2g4mvOloQaCxFryAmIvtr9HmG6o6hldnqKSMF6hvVz6Fhon-w48lWj3xI8nHuUWLebD4e0vMT0bVLdKnwRRMsJbkMpEoNURlB8cT6BIXE5C5m_OKYftsGHlLOuu_hb5Tw8MihKcwSr7PZRG14VX-Sg5VxgX8vT3ZtQDZCyfuoTc2DX0' },
      { id: 2, type: 'Article', discipline: 'Digital Strategy', access: 'Free', featured: false, title: 'Attention as Currency: The Economics of the Editorial Gaze', excerpt: 'How premium publishers are reclaiming reader attention in an era of infinite content supply — and why scarcity is the most powerful editorial tool left.', author: 'Thomas Whitfield', authorRole: 'CMO, Financial Times', readTime: '11 min read', date: 'Oct 2024', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
      { id: 3, type: 'Article', discipline: 'Typography', access: 'Free', featured: false, title: 'Why Variable Fonts Are the Most Important Design Innovation of the Decade', excerpt: 'A practitioner\'s argument for why the industry has barely scratched the surface of what variable font technology makes possible for editorial expression.', author: 'Dr. Elena Rossi', authorRole: 'Type Designer', readTime: '9 min read', date: 'Oct 2024', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPz8_78Edzn5b-e_DxzPMTrtkfWfNvSU7UMDjp0VQof-tje2OSPJMakAOG-1WRPz-F0xHLb4Wr4x_bP6DJVfmBBlrGS2oXQdcP9XNpy6jXsKR9zPoFmCJVBK-b7mGwxOlhnQISuROkDsTGCuQEWr7L4cwJ0OUQB5V73UL8Se_OiLSzC3AUggVJL5DcET-744u5fF64ZPMiSgamFBCIw7uSJLDYoZfVpmUf9jBTjnrUubw6BTnqanlhU5vswiZUocjzdaK4f2FFPQ' },
      { id: 4, type: 'Article', discipline: 'Artificial Intelligence', access: 'Elite Member', featured: false, title: 'The Editor and the Algorithm: Negotiating Creative Authority', excerpt: 'When AI can generate publishable copy in seconds, what remains of the editor\'s irreplaceable value? A frank conversation about creative authority in the age of generative models.', author: 'Dr. Amara Okafor', authorRole: 'Head of AI, The Atlantic', readTime: '16 min read', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80' },
      { id: 5, type: 'Article', discipline: 'Visual Narrative', access: 'Free', featured: false, title: 'Grayscale as a Design Decision: The Power of Withheld Color', excerpt: 'Why some of the most sophisticated editorial photography is choosing to stay monochrome — and what that restraint communicates about the brand behind the lens.', author: 'Lydia Grant', authorRole: 'Lead Photographer', readTime: '8 min read', date: 'Sep 2024', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAagtMGjriXzIo3hvNtjVaXc2KMZWHhJih8LN3bfgZu-d2qd8WePWHrwHJ3o3k5PQqh5HV41j8E0bt3Bm7aGEC2O6lGJQQEYVKpi-JVYWxayn-JNE4z8qc4gymDRCkEKPafyTODsB1WP5oObFcSOe6qlERzWKAzgnZlK4t95cgX4zx_ir_UYJ7UBoHXjkjSoKUkUi5YgTukuxfwYd8QDgvL_30S-Ia4HugYRcuOhf6D_La__JQE64anHdx29Ysf0vZt7tv1-nZ10c0' },
      { id: 6, type: 'Article', discipline: 'Digital Strategy', access: 'Elite Member', featured: false, title: 'Subscription Fatigue and the Return of the Single Purchase', excerpt: 'After a decade of recurring revenue worship, a countermovement is forming among digital publishers — and the implications for editorial business models are significant.', author: 'Priya Nair', authorRole: 'Head of Insights, Reuters', readTime: '12 min read', date: 'Sep 2024', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cd?w=80&q=80' },
      { id: 7, type: 'E-Book', discipline: 'Editorial Design', access: 'Elite Member', featured: false, title: 'The Grid: A Complete Field Manual for Editorial Layout', excerpt: 'An exhaustive, 180-page practitioner\'s guide to grid systems — from classical Swiss typography through responsive digital layouts. Diagrams, case studies, and annotated examples throughout.', author: 'Ingrid Larsen', authorRole: 'Design Director, Vogue Scandinavia', readTime: '180 pages', date: 'Aug 2024', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
      { id: 8, type: 'E-Book', discipline: 'Digital Strategy', access: 'Elite Member', featured: false, title: 'Owning the Reader: Executive Strategies for Audience Loyalty', excerpt: 'A strategic playbook for senior editors and media executives on converting casual readers into deeply invested members. Covers community design, editorial voice, and retention mechanics.', author: 'Marcus Elliot', authorRole: 'VP Strategy, Bloomberg Media', readTime: '220 pages', date: 'Jul 2024', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80' },
      { id: 9, type: 'E-Book', discipline: 'Visual Narrative', access: 'Free', featured: false, title: 'Light, Shadow, and the Luxury Frame', excerpt: 'Celeste Aurore\'s visual methodology distilled into 90 pages — how to use natural and studio lighting to construct images that carry the weight of a full editorial story.', author: 'Celeste Aurore', authorRole: 'Creative Director, Condé Nast', readTime: '90 pages', date: 'Jun 2024', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80' },
      { id: 10, type: 'E-Book', discipline: 'Artificial Intelligence', access: 'Elite Member', featured: false, title: 'Prompting for Precision: The Executive\'s AI Writing Companion', excerpt: 'Not a beginner\'s guide. A sophisticated framework for using large language models as a creative collaborator — with discipline-specific prompt libraries for editorial, brand, and long-form work.', author: 'Nathan Cole', authorRole: 'Director of AI Products, Adobe', readTime: '140 pages', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80' },
      { id: 11, type: 'Research Paper', discipline: 'Artificial Intelligence', access: 'Free', featured: false, title: 'Algorithmic Curation and the Erosion of Editorial Judgment', excerpt: 'A three-year study across 14 major digital publications examining how increased reliance on algorithmic recommendation systems correlates with measurable decline in editorial distinctiveness.', author: 'Prof. Isabelle Laurent', authorRole: 'AI Ethics Chair, Sciences Po', readTime: '48 pages', date: 'Oct 2024', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80' },
      { id: 12, type: 'Research Paper', discipline: 'Typography', access: 'Free', featured: false, title: 'Reading Velocity and Typeface Selection: Eye-Tracking Evidence from Long-Form Editorial', excerpt: 'Eye-tracking data from 2,400 participants across six typeface categories reveals surprising relationships between font weight, line length, and deep reading engagement.', author: 'Prof. Beatrice Wren', authorRole: 'Typography Historian, Oxford', readTime: '32 pages', date: 'Sep 2024', img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80' },
      { id: 13, type: 'Research Paper', discipline: 'Digital Strategy', access: 'Elite Member', featured: false, title: 'The Prestige Premium: Willingness-to-Pay Among High-Income Digital Media Consumers', excerpt: 'Quantitative analysis of pricing elasticity and perceived value in premium editorial subscriptions — with implications for positioning, packaging, and price architecture.', author: 'Thomas Whitfield', authorRole: 'CMO, Financial Times', readTime: '26 pages', date: 'Aug 2024', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
      { id: 14, type: 'Research Paper', discipline: 'Visual Narrative', access: 'Free', featured: false, title: 'Color Memory and Brand Recall in Luxury Editorial Photography', excerpt: 'How color palette consistency across editorial touchpoints affects long-term brand recall — with case studies from Vogue, Wallpaper*, and Monocle across a five-year period.', author: 'Naomi Sato', authorRole: 'Art Director', readTime: '22 pages', date: 'Jul 2024', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80' },
      { id: 15, type: 'Research Paper', discipline: 'Artificial Intelligence', access: 'Elite Member', featured: false, title: 'Human–AI Co-Authorship in Journalism: Attribution, Ethics, and Disclosure Norms', excerpt: 'An interdisciplinary paper examining emerging norms around transparency, byline attribution, and editorial accountability when generative AI is involved in content production.', author: 'Dr. Yuki Tanaka', authorRole: 'Research Scientist, DeepMind', readTime: '38 pages', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80' },
      { id: 16, type: 'PDF Guide', discipline: 'Editorial Design', access: 'Free', featured: false, title: 'The White Space Index: A Practical Guide to Editorial Breathing Room', excerpt: 'A concise, highly visual guide to white space principles across print and digital contexts — with annotated before/after comparisons from real editorial redesigns.', author: 'Kwame Osei', authorRole: 'Digital Design Lead, The Guardian', readTime: '24 pages', date: 'Aug 2024', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80' },
      { id: 17, type: 'PDF Guide', discipline: 'Typography', access: 'Elite Member', featured: false, title: 'Type Pairing for Editorial Systems: 40 Curated Combinations', excerpt: '40 rigorously curated typeface pairings for editorial use — each with specimen pages, use-case notes, and licensing guidance. A reference document for professional designers.', author: 'Hana Yamamoto', authorRole: 'Type Director, Monocle', readTime: '80 pages', date: 'Jul 2024', img: 'https://images.unsplash.com/photo-1583591186010-9d27f50a9c4a?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80' },
      { id: 18, type: 'PDF Guide', discipline: 'Visual Narrative', access: 'Free', featured: false, title: 'Shot List Architecture: Structuring a Visual Essay Before the Shoot', excerpt: 'A pre-production framework for photographers and creative directors — how to reverse-engineer the final layout from the shot list, not the other way around.', author: 'Rafael Moreno', authorRole: 'Film Director', readTime: '18 pages', date: 'Jun 2024', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
      { id: 19, type: 'PDF Guide', discipline: 'Digital Strategy', access: 'Elite Member', featured: false, title: 'The Editorial Pitch Deck: Securing Buy-In for Long-Form Projects', excerpt: 'A template and annotated walkthrough for pitching ambitious editorial projects internally — structured for senior stakeholders who think in ROI, not narrative.', author: 'Sofia Chen', authorRole: 'Tech Analyst', readTime: '16 pages', date: 'May 2024', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVzt_JDg1K9vbRbEsfMWpI4oCgF6e4CEqcKk4RYAVVGFJvhdQgu1Aqwp2UHdxqCFehpCNKhFg4FUKKjzIAF4iipsyLBCjHkZAiS9k-ga-12JRt1FjO4qR7gUMlWrB48_4F3kDYnNxu0btbgNuBhdSKprQjvEU3PSDZwJQ1MbZ4sgU7OPdIlxt1pDbLru_Pnnoozz_ZnQ2qNA-LB6WjBy5ZiDxXntahItzFjxWrMnEJ1p3ot-B2Zl6TS8kitTDRsTIkVt8ES9IeevE' },
      { id: 20, type: 'PDF Guide', discipline: 'Artificial Intelligence', access: 'Free', featured: false, title: 'AI Disclosure Standards for Editorial Teams: A Working Framework', excerpt: 'A practical policy template for editorial organizations navigating AI transparency — covering disclosure language, workflow documentation, and reader communication standards.', author: 'Leon Hartmann', authorRole: 'Chief AI Officer, Axel Springer', readTime: '12 pages', date: 'Oct 2024', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80' },
      { id: 21, type: 'Reading List', discipline: 'Editorial Design', access: 'Free', featured: false, title: 'The Canon: 25 Books Every Editorial Designer Should Have Read', excerpt: 'A carefully argued list — not a greatest hits compilation. Each selection is annotated with the specific insight it offers to practising editorial designers.', author: 'Olivier Dumont', authorRole: 'Senior Designer, Le Monde', readTime: '8 min read', date: 'Aug 2024', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&q=80' },
      { id: 22, type: 'Reading List', discipline: 'Digital Strategy', access: 'Free', featured: false, title: 'Media Business Foundations: The 20 Texts That Define the Field', excerpt: 'From Clay Shirky to Ben Thompson — a curated reading list for editors who need to understand the business structures that shape their creative decisions.', author: 'Marcus Elliot', authorRole: 'VP Strategy, Bloomberg Media', readTime: '6 min read', date: 'Jul 2024', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80' },
      { id: 23, type: 'Reading List', discipline: 'Artificial Intelligence', access: 'Elite Member', featured: false, title: 'AI Literacy for Editors: The Essential Non-Technical Reading List', excerpt: 'You don\'t need to understand transformers. You need to understand what AI changes about your work. This list — 18 essays, papers, and books — builds exactly that literacy.', author: 'Dr. Amara Okafor', authorRole: 'Head of AI, The Atlantic', readTime: '7 min read', date: 'Nov 2024', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80' },
      { id: 24, type: 'Reading List', discipline: 'Visual Narrative', access: 'Free', featured: false, title: 'Seeing Like a Photographer: 15 Books on the Visual Language of Editorial', excerpt: 'From Cartier-Bresson\'s decisive moment to Wolfgang Tillmans\' disruption of editorial convention — a reading list that teaches the history and theory behind great editorial image-making.', author: 'Lydia Grant', authorRole: 'Lead Photographer', readTime: '9 min read', date: 'Jun 2024', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAagtMGjriXzIo3hvNtjVaXc2KMZWHhJih8LN3bfgZu-d2qd8WePWHrwHJ3o3k5PQqh5HV41j8E0bt3Bm7aGEC2O6lGJQQEYVKpi-JVYWxayn-JNE4z8qc4gymDRCkEKPafyTODsB1WP5oObFcSOe6qlERzWKAzgnZlK4t95cgX4zx_ir_UYJ7UBoHXjkjSoKUkUi5YgTukuxfwYd8QDgvL_30S-Ia4HugYRcuOhf6D_La__JQE64anHdx29Ysf0vZt7tv1-nZ10c0' },
    ];

    const masterworks = [
      { id: 1, instructor: 'Julian Vane', role: 'Senior Editor', discipline: 'Digital Strategy', workTitle: 'The Collapse Issue', workDesc: 'A landmark redesign of a 40-year-old financial publication — transforming it from a data-dense broadsheet into a visually led digital-first editorial brand without losing institutional trust.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIuX_z51JF6VxwalJYJTLanaJ59HRYv787VmKPQzeUJFVNeZ8iUit5wb3LTFAV-KdtJW8HaeeZ2WiduL_0b7KMcig5_wrL2g4mvOloQaCxFryAmIvtr9HmG6o6hldnqKSMF6hvVz6Fhon-w48lWj3xI8nHuUWLebD4e0vMT0bVLdKnwRRMsJbkMpEoNURlB8cT6BIXE5C5m_OKYftsGHlLOuu_hb5Tw8MihKcwSr7PZRG14VX-Sg5VxgX8vT3ZtQDZCyfuoTc2DX0' },
      { id: 2, instructor: 'Dr. Elena Rossi', role: 'Type Designer', discipline: 'Typography', workTitle: 'Forma Serif', workDesc: 'A custom typeface family commissioned by a Milan luxury house — 14 weights optimised for both 6pt print captions and 96pt digital headline display, balancing restraint with personality.', img: 'https://images.unsplash.com/photo-1583591186010-9d27f50a9c4a?w=700&q=80', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPz8_78Edzn5b-e_DxzPMTrtkfWfNvSU7UMDjp0VQof-tje2OSPJMakAOG-1WRPz-F0xHLb4Wr4x_bP6DJVfmBBlrGS2oXQdcP9XNpy6jXsKR9zPoFmCJVBK-b7mGwxOlhnQISuROkDsTGCuQEWr7L4cwJ0OUQB5V73UL8Se_OiLSzC3AUggVJL5DcET-744u5fF64ZPMiSgamFBCIw7uSJLDYoZfVpmUf9jBTjnrUubw6BTnqanlhU5vswiZUocjzdaK4f2FFPQ' },
      { id: 3, instructor: 'Celeste Aurore', role: 'Creative Director, Condé Nast', discipline: 'Visual Narrative', workTitle: 'Quietude — Paris Fashion Week 2023', workDesc: 'A 32-image editorial series shot entirely in natural window light across four Haussmann apartments — later acquired by the Centre Pompidou permanent collection.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80' },
      { id: 4, instructor: 'Thomas Whitfield', role: 'CMO, Financial Times', discipline: 'Digital Strategy', workTitle: 'FT Weekend Brand Evolution', workDesc: 'The strategic repositioning of FT Weekend from supplement to standalone cultural authority — a three-year programme that grew weekend readership by 34% and opened new luxury advertising verticals.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' },
      { id: 5, instructor: 'Ingrid Larsen', role: 'Design Director, Vogue Scandinavia', discipline: 'Editorial Design', workTitle: 'Vogue Scandinavia — Launch Identity', workDesc: 'The complete visual identity and grid system for Vogue Scandinavia\'s inaugural issue — establishing a Nordic minimalist editorial voice within the global Vogue system.', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80' },
      { id: 6, instructor: 'Rafael Moreno', role: 'Film Director', discipline: 'Visual Narrative', workTitle: 'Nocturne — Long-Form Documentary Series', workDesc: 'A six-part documentary on nocturnal urban culture, co-produced with Arte France — winner of the International Documentary Festival Amsterdam Award for Cinematography.', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80' },
      { id: 7, instructor: 'Prof. Isabelle Laurent', role: 'AI Ethics Chair, Sciences Po', discipline: 'Artificial Intelligence', workTitle: 'The Curation Paradox — EU Policy White Paper', workDesc: 'A landmark policy document submitted to the European Commission on algorithmic transparency in media — cited in the drafting of the EU AI Act\'s journalism provisions.', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80' },
      { id: 8, instructor: 'Hana Yamamoto', role: 'Type Director, Monocle', discipline: 'Typography', workTitle: 'Monocle Typographic System — 2022 Refresh', workDesc: 'A comprehensive typographic refresh of Monocle\'s entire print and digital system — new custom display face, revised body text hierarchy, and a global caption system across 11 international editions.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80' },
      { id: 9, instructor: 'Marcus Elliot', role: 'VP Strategy, Bloomberg Media', discipline: 'Digital Strategy', workTitle: 'Bloomberg Connects — Museum Media Partnership', workDesc: 'The architecture of Bloomberg\'s cultural media strategy — a portfolio of institutional partnerships with 600+ museums globally, creating a new content vertical generating $40M in annual editorial revenue.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80' },
      { id: 10, instructor: 'Kwame Osei', role: 'Digital Design Lead, The Guardian', discipline: 'Editorial Design', workTitle: 'The Guardian — Long-Read Visual System', workDesc: 'A purpose-built visual system for The Guardian\'s long-form journalism — custom illustration frameworks, data visualisation standards, and a responsive layout architecture optimised for deep reading sessions.', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80' },
    ];

    const typeIcon = { 'Article': 'article', 'E-Book': 'menu_book', 'Research Paper': 'science', 'PDF Guide': 'picture_as_pdf', 'Reading List': 'format_list_bulleted' };
    const accessBadge = { 'Free': { style: 'bg-secondary-container text-on-secondary-container', label: 'Free' }, 'Elite Member': { style: 'bg-primary-container text-on-primary-container', label: 'Elite' } };

    const RESOURCES_PER_PAGE = 6;
    let currentPage = 1;
    let filteredResources = resources.filter(r => !r.featured);

    function renderFeatured() {
      const featured = resources.find(r => r.featured);
      const el = document.getElementById('featured-resource');
      if (!featured || !el) return;
      el.innerHTML = `
        <img class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="${featured.img}" alt="${featured.title}" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="relative z-10 p-10 md:p-16 max-w-3xl">
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-tertiary text-sm">${typeIcon[featured.type]}</span>
            <span class="text-tertiary text-xs font-bold tracking-widest uppercase">${featured.type}</span>
            <span class="text-white/40">·</span>
            <span class="text-white/60 text-xs">${featured.discipline}</span>
            <span class="text-white/40">·</span>
            <span class="px-2 py-0.5 ${accessBadge[featured.access].style} text-[10px] font-bold tracking-widest uppercase rounded-full">${accessBadge[featured.access].label}</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-extrabold font-headline text-white tracking-tighter leading-tight mb-6">${featured.title}</h2>
          <p class="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">${featured.excerpt}</p>
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
              <img class="w-full h-full object-cover" src="${featured.avatar}" alt="${featured.author}" onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" />
            </div>
            <div>
              <span class="text-white font-bold text-sm">${featured.author}</span>
              <span class="text-white/50 text-xs block">${featured.authorRole} · ${featured.readTime} · ${featured.date}</span>
            </div>
            <button class="ml-auto flex items-center gap-2 px-6 py-3 bg-tertiary text-white font-bold text-sm rounded hover:bg-tertiary/80 transition-all">Read Now <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
          </div>
        </div>`;
    }

    function renderResourceCard(r) {
      const badge = accessBadge[r.access];
      return `
        <div class="group cursor-pointer flex flex-col bg-surface border border-outline-variant/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-outline-variant/60 transition-all duration-300">
          <div class="relative overflow-hidden aspect-video bg-surface-container-low">
            <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="${r.img}" alt="${r.title}" onerror="this.src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div class="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <span class="material-symbols-outlined text-white text-xs">${typeIcon[r.type]}</span>
              <span class="text-white text-[10px] font-bold tracking-wider uppercase">${r.type}</span>
            </div>
            <div class="absolute top-4 right-4">
              <span class="px-2 py-0.5 ${badge.style} text-[10px] font-bold tracking-widest uppercase rounded-full">${badge.label}</span>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <span class="text-xs font-bold text-tertiary tracking-widest uppercase mb-3">${r.discipline}</span>
            <h3 class="font-headline font-bold text-black text-lg leading-snug mb-3 group-hover:underline underline-offset-4 flex-grow">${r.title}</h3>
            <p class="text-secondary text-sm leading-relaxed mb-5 line-clamp-2">${r.excerpt}</p>
            <div class="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
              <div class="w-7 h-7 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                <img class="w-full h-full object-cover" src="${r.avatar}" alt="${r.author}" onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" />
              </div>
              <span class="text-xs text-secondary flex-grow">${r.author} <span class="text-outline">·</span> ${r.readTime}</span>
              <span class="text-xs text-outline">${r.date}</span>
            </div>
          </div>
        </div>`;
    }

    function renderResources() {
      const grid = document.getElementById('resource-grid');
      const pgEl = document.getElementById('resource-pagination');
      const count = document.getElementById('resource-count');
      const nonFeatured = filteredResources.filter(r => !r.featured);
      const total = Math.ceil(nonFeatured.length / RESOURCES_PER_PAGE);
      const pageItems = nonFeatured.slice((currentPage - 1) * RESOURCES_PER_PAGE, currentPage * RESOURCES_PER_PAGE);

      if (count) count.textContent = nonFeatured.length;
      grid.innerHTML = pageItems.length > 0 ? pageItems.map(renderResourceCard).join('') : '<p class="text-secondary col-span-3 py-24 text-center">No resources match your filters.</p>';

      if (total <= 1) { pgEl.innerHTML = ''; return; }
      let pagesHTML = '';
      for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= currentPage - 1 && i <= currentPage + 1)) pagesHTML += `<button data-page="${i}" class="w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold transition-all ${i === currentPage ? 'bg-primary text-on-primary' : 'text-secondary hover:bg-surface-container'}">${i}</button>`;
        else if (i === currentPage - 2 || i === currentPage + 2) pagesHTML += `<span class="px-2 text-outline">...</span>`;
      }
      pgEl.innerHTML = `
        <button id="res-prev" class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-secondary hover:border-black hover:text-black transition-all ${currentPage === 1 ? 'opacity-30 pointer-events-none' : ''}"><span class="material-symbols-outlined">chevron_left</span></button>
        <div class="flex items-center gap-2">${pagesHTML}</div>
        <button id="res-next" class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-secondary hover:border-black hover:text-black transition-all ${currentPage === total ? 'opacity-30 pointer-events-none' : ''}"><span class="material-symbols-outlined">chevron_right</span></button>`;
      pgEl.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => { currentPage = parseInt(btn.dataset.page); renderResources(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
      document.getElementById('res-prev')?.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderResources(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
      document.getElementById('res-next')?.addEventListener('click', () => { if (currentPage < total) { currentPage++; renderResources(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
    }

    function renderMasterworks() {
      const grid = document.getElementById('masterworks-grid');
      if (!grid) return;
      grid.innerHTML = masterworks.map((m, i) => `
        <div class="group relative cursor-pointer overflow-hidden ${i % 3 !== 2 ? 'border-r' : ''} border-b border-outline-variant/20" style="aspect-ratio:4/3;">
          <img class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="${m.img}" alt="${m.workTitle}" onerror="this.src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80'" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute inset-0 bg-primary-container/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-8">
            <span class="text-tertiary text-xs font-bold tracking-widest uppercase mb-2">${m.discipline}</span>
            <h3 class="font-headline font-bold text-white text-xl leading-snug mb-3">${m.workTitle}</h3>
            <p class="text-on-primary-container text-sm leading-relaxed mb-6">${m.workDesc}</p>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0"><img class="w-full h-full object-cover" src="${m.avatar}" alt="${m.instructor}" onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" /></div>
              <div><span class="text-white font-bold text-sm block">${m.instructor}</span><span class="text-on-primary-container text-xs">${m.role}</span></div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0"><img class="w-full h-full object-cover" src="${m.avatar}" alt="${m.instructor}" onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" /></div>
              <div><span class="text-white font-bold text-sm block">${m.instructor}</span><span class="text-white/60 text-xs">${m.workTitle}</span></div>
            </div>
          </div>
        </div>`).join('');
    }

    function applyLibraryFilters() {
      const checkedTypes = [...document.querySelectorAll('#type-filters input:checked')].map(cb => cb.value);
      const checkedDisc = [...document.querySelectorAll('#discipline-filters input:checked')].map(cb => cb.value);
      const query = document.getElementById('library-search')?.value.toLowerCase().trim() || '';
      filteredResources = resources.filter(r => {
        if (r.featured) return false;
        const matchType = checkedTypes.length === 0 || checkedTypes.includes(r.type);
        const matchDisc = checkedDisc.length === 0 || checkedDisc.includes(r.discipline);
        const matchSearch = query === '' || r.title.toLowerCase().includes(query) || r.author.toLowerCase().includes(query);
        return matchType && matchDisc && matchSearch;
      });
      currentPage = 1;
      renderResources();
    }

    document.querySelectorAll('#type-filters input, #discipline-filters input').forEach(cb => cb.addEventListener('change', applyLibraryFilters));
    let libSearchTimeout;
    document.getElementById('library-search')?.addEventListener('input', () => { clearTimeout(libSearchTimeout); libSearchTimeout = setTimeout(applyLibraryFilters, 300); });
    document.getElementById('resource-sort')?.addEventListener('change', function () {
      if (this.value === 'A – Z') filteredResources.sort((a, b) => a.title.localeCompare(b.title));
      else if (this.value === 'Most Popular') filteredResources.sort((a, b) => a.id - b.id);
      else filteredResources.sort((a, b) => b.id - a.id);
      currentPage = 1; renderResources();
    });
    document.getElementById('clear-library-filters')?.addEventListener('click', () => {
      document.querySelectorAll('#type-filters input, #discipline-filters input').forEach(cb => cb.checked = false);
      const s = document.getElementById('library-search'); if (s) s.value = '';
      applyLibraryFilters();
    });

    renderFeatured();
    renderResources();
    renderMasterworks();
  }

/* ─────────────────────────────────────────
     8. Instructors Page
     Hanya aktif kalau #instructor-grid ada.
     24 instructors, filter by discipline + search.
  ───────────────────────────────────────── */
  function initInstructorsPage() {
    if (!document.getElementById('instructor-grid')) return;

    const instructors = [
      { name:'Julian Vane', role:'Senior Editor', discipline:'Digital Strategy', courses:2, bio:'Former Editor-in-Chief at three major European publications. Architect of digital narrative strategy for the post-algorithm era.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuCIuX_z51JF6VxwalJYJTLanaJ59HRYv787VmKPQzeUJFVNeZ8iUit5wb3LTFAV-KdtJW8HaeeZ2WiduL_0b7KMcig5_wrL2g4mvOloQaCxFryAmIvtr9HmG6o6hldnqKSMF6hvVz6Fhon-w48lWj3xI8nHuUWLebD4e0vMT0bVLdKnwRRMsJbkMpEoNURlB8cT6BIXE5C5m_OKYftsGHlLOuu_hb5Tw8MihKcwSr7PZRG14VX-Sg5VxgX8vT3ZtQDZCyfuoTc2DX0', cover:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
      { name:'Lydia Grant', role:'Lead Photographer', discipline:'Visual Narrative', courses:2, bio:'Contributor to Vogue, i-D, and Dazed. Her work redefines editorial restraint — recognised by the World Press Photo Foundation.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuAagtMGjriXzIo3hvNtjVaXc2KMZWHhJih8LN3bfgZu-d2qd8WePWHrwHJ3o3k5PQqh5HV41j8E0bt3Bm7aGEC2O6lGJQQEYVKpi-JVYWxayn-JNE4z8qc4gymDRCkEKPafyTODsB1WP5oObFcSOe6qlERzWKAzgnZlK4t95cgX4zx_ir_UYJ7UBoHXjkjSoKUkUi5YgTukuxfwYd8QDgvL_30S-Ia4HugYRcuOhf6D_La__JQE64anHdx29Ysf0vZt7tv1-nZ10c0', cover:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80' },
      { name:'Celeste Aurore', role:'Creative Director, Condé Nast', discipline:'Visual Narrative', courses:1, bio:'Twenty years shaping visual identity across Condé Nast\'s flagship titles. Her 2023 Paris series entered the Centre Pompidou permanent collection.', avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80', cover:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
      { name:'Naomi Sato', role:'Art Director', discipline:'Visual Narrative', courses:1, bio:'Art Director across Tokyo, London, and New York. Color theorist and author of The Chromatic Brief — required reading in 14 design schools globally.', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80', cover:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80' },
      { name:'Rafael Moreno', role:'Film Director', discipline:'Visual Narrative', courses:1, bio:'Award-winning documentary filmmaker and visual essayist. His six-part Nocturne series won the IDFA Award for Cinematography in 2023.', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80', cover:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80' },
      { name:'Sofia Chen', role:'Tech Analyst', discipline:'Digital Strategy', courses:2, bio:'Former Head of Data at Condé Nast International. Pioneered audience intelligence frameworks now adopted by 40+ global media organisations.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuBVzt_JDg1K9vbRbEsfMWpI4oCgF6e4CEqcKk4RYAVVGFJvhdQgu1Aqwp2UHdxqCFehpCNKhFg4FUKKjzIAF4iipsyLBCjHkZAiS9k-ga-12JRt1FjO4qR7gUMlWrB48_4F3kDYnNxu0btbgNuBhdSKprQjvEU3PSDZwJQ1MbZ4sgU7OPdIlxt1pDbLru_Pnnoozz_ZnQ2qNA-LB6WjBy5ZiDxXntahItzFjxWrMnEJ1p3ot-B2Zl6TS8kitTDRsTIkVt8ES9IeevE', cover:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      { name:'Marcus Elliot', role:'VP Strategy, Bloomberg Media', discipline:'Digital Strategy', courses:2, bio:'Architect of Bloomberg\'s cultural media portfolio. Oversees editorial partnerships across 600+ global institutions generating $40M in annual content revenue.', avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80', cover:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { name:'Priya Nair', role:'Head of Insights, Reuters', discipline:'Digital Strategy', courses:1, bio:'Leads audience intelligence at Reuters. Researcher and strategist in editorial analytics, with published work in the Reuters Institute Digital News Report.', avatar:'https://images.unsplash.com/photo-1494790108755-2616b332c3cd?w=80&q=80', cover:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
      { name:'Thomas Whitfield', role:'CMO, Financial Times', discipline:'Digital Strategy', courses:2, bio:'Drove the FT Weekend repositioning that grew weekend readership 34%. Considered one of the most influential editorial strategists in British media.', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', cover:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80' },
      { name:'Marcus Thorne', role:'Creative Director', discipline:'Editorial Design', courses:1, bio:'CD at three consecutive award-winning magazine redesigns. Recipient of the D&AD Black Pencil for editorial design excellence.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuA_7bxPu8GRTNyVqxvYPZYM0VxVMbpk7FY2ZGmiJhwbOsPKOQPpFGvavP6TcVkjjxaVn0_RYOJZGYO5o0LqV_Rb8GcSBf49-4pis_sVrCf4Qqbv2wd0IR32C1OmUqgr0aq5_wWqbfxVRzbPMXM7bZOgFolF28LWNrqc6B1sIfTWGOEXC77clM4QKHrTi-GpeK8WQm2HneNQcS7K0Vo_B4z5CYOy3b_mCzIHxcsMfoP11AeCngObF9YT6b9Ln7NkSn9GI70Z59SUqII', cover:'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80' },
      { name:'Ingrid Larsen', role:'Design Director, Vogue Scandinavia', discipline:'Editorial Design', courses:2, bio:'Established Vogue Scandinavia\'s complete visual identity from inception. The launch issue sold out in 72 hours across all Nordic markets.', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80', cover:'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80' },
      { name:'Olivier Dumont', role:'Senior Designer, Le Monde', discipline:'Editorial Design', courses:2, bio:'Led Le Monde\'s print-to-digital transition — one of the most studied editorial redesigns in European media history. Teaches at Sciences Po Paris.', avatar:'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&q=80', cover:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
      { name:'Alicia Monroe', role:'Art Director, TIME Magazine', discipline:'Editorial Design', courses:1, bio:'Art Director responsible for three of TIME\'s most recognisable covers of the decade. Merges photojournalism and graphic design with surgical precision.', avatar:'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80', cover:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80' },
      { name:'Kwame Osei', role:'Digital Design Lead, The Guardian', discipline:'Editorial Design', courses:2, bio:'Built The Guardian\'s long-read visual system from scratch. His responsive layout architecture is referenced in every major digital editorial design program.', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80', cover:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
      { name:'Dr. Elena Rossi', role:'Type Designer', discipline:'Typography', courses:2, bio:'Creator of three retail typefaces used by over 200 global brands. Her doctoral research on optical sizing remains the definitive academic reference in the field.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPz8_78Edzn5b-e_DxzPMTrtkfWfNvSU7UMDjp0VQof-tje2OSPJMakAOG-1WRPz-F0xHLb4Wr4x_bP6DJVfmBBlrGS2oXQdcP9XNpy6jXsKR9zPoFmCJVBK-b7mGwxOlhnQISuROkDsTGCuQEWr7L4cwJ0OUQB5V73UL8Se_OiLSzC3AUggVJL5DcET-744u5fF64ZPMiSgamFBCIw7uSJLDYoZfVpmUf9jBTjnrUubw6BTnqanlhU5vswiZUocjzdaK4f2FFPQ', cover:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
      { name:'Hana Yamamoto', role:'Type Director, Monocle', discipline:'Typography', courses:2, bio:'Oversaw Monocle\'s typographic system across 11 international editions. Designed custom display faces for four luxury brands in the past three years.', avatar:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80', cover:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
      { name:'Sven Albers', role:'Lead Typeface Engineer', discipline:'Typography', courses:1, bio:'Typeface engineer with credits on variable font systems for Google Fonts, Adobe, and three major European foundries. Keynote speaker at ATypI 2023.', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&q=80', cover:'https://images.unsplash.com/photo-1583591186010-9d27f50a9c4a?w=600&q=80' },
      { name:'Prof. Beatrice Wren', role:'Typography Historian, Oxford', discipline:'Typography', courses:2, bio:'Professor of Typography at the University of Oxford. Her eye-tracking research on long-form editorial reading has been cited in over 300 academic papers.', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80', cover:'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80' },
      { name:'Dr. Amara Okafor', role:'Head of AI, The Atlantic', discipline:'Artificial Intelligence', courses:2, bio:'Leads AI product and editorial strategy at The Atlantic. Pioneer of the human-AI co-authorship framework adopted by seven major US publications.', avatar:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80', cover:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
      { name:'Leon Hartmann', role:'Chief AI Officer, Axel Springer', discipline:'Artificial Intelligence', courses:2, bio:'Responsible for AI integration across Axel Springer\'s 40+ editorial brands. Authored the industry\'s most widely adopted AI disclosure framework for newsrooms.', avatar:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80', cover:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80' },
      { name:'Dr. Yuki Tanaka', role:'Research Scientist, DeepMind', discipline:'Artificial Intelligence', courses:1, bio:'Research scientist specialising in machine perception and visual AI systems. Her work on generative image quality evaluation is deployed in production at three major media platforms.', avatar:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80', cover:'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600&q=80' },
      { name:'Prof. Isabelle Laurent', role:'AI Ethics Chair, Sciences Po', discipline:'Artificial Intelligence', courses:2, bio:'Chair of AI Ethics at Sciences Po Paris. Her white paper on algorithmic curation was cited in the drafting of the EU AI Act\'s journalism provisions.', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', cover:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80' },
      { name:'Nathan Cole', role:'Director of AI Products, Adobe', discipline:'Artificial Intelligence', courses:2, bio:'Leads AI product development for Adobe\'s creative suite. Formerly at OpenAI, where he led the editorial applications research team.', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80', cover:'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80' },
      { name:'Anders Holm', role:'Identity Specialist', discipline:'Visual Narrative', courses:1, bio:'Brand identity architect for 30+ luxury and cultural institutions across Scandinavia and Central Europe. Minimalism as methodology, not aesthetic.', avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuAcqEOj23gISs_pTetyZyTuXSbt6twyCOVwHpJsZRTAFO55qVluXWsWuZiLGPUJNMGf-3pBr5zADgrSYgFoH4iyLC8j3H_Uc_MuHU2_7iEIqLDmS_Hl3qMm6G-r64yal6k-6wX4wXIJPX0G6DGW-EHAEEFTnayukEiMTfL6a_0SyDnuLtJsA5-u09ikkmigSpF_wdoAJ5ZcUXBdcdWyVXSb1e2r5m8qtHLoLvdysX4bSomP0QzshO5iuXjbCX13K3CPF0g15Fpxy6M', cover:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    ];

    let filtered = [...instructors];
    let activeFilter = 'All';

    function renderCard(ins) {
      return `
        <div class="group cursor-pointer flex flex-col bg-surface border border-outline-variant/20 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <!-- Cover image -->
          <div class="relative overflow-hidden h-40 bg-surface-container-low">
            <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="${ins.cover}" alt="${ins.name}"
              onerror="this.src='https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <!-- Discipline pill -->
            <div class="absolute top-4 left-4">
              <span class="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase rounded-full">${ins.discipline}</span>
            </div>
            <!-- Course count -->
            <div class="absolute top-4 right-4">
              <span class="px-2 py-0.5 bg-tertiary text-white text-[10px] font-bold tracking-widest uppercase rounded-full">${ins.courses} Course${ins.courses > 1 ? 's' : ''}</span>
            </div>
          </div>
          <!-- Avatar + info -->
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0 border-2 border-surface -mt-10 relative z-10 shadow-md">
                <img class="w-full h-full object-cover" src="${ins.avatar}" alt="${ins.name}"
                  onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" />
              </div>
              <div class="pt-1">
                <h3 class="font-headline font-bold text-black text-lg leading-tight">${ins.name}</h3>
                <span class="text-secondary text-sm">${ins.role}</span>
              </div>
            </div>
            <p class="text-secondary text-sm leading-relaxed flex-grow">${ins.bio}</p>
            <div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <a href="curricula.html" class="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all">
                View Courses <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <span class="text-xs text-outline">${ins.discipline}</span>
            </div>
          </div>
        </div>`;
    }

    function render() {
      const grid  = document.getElementById('instructor-grid');
      const empty = document.getElementById('instructor-empty');
      const count = document.getElementById('instructor-count');
      if (count) count.textContent = filtered.length;
      if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
      } else {
        empty.classList.add('hidden');
        grid.innerHTML = filtered.map(renderCard).join('');
      }
    }

    function applyFilter() {
      const query = document.getElementById('instructor-search')?.value.toLowerCase().trim() || '';
      filtered = instructors.filter(ins => {
        const matchDisc  = activeFilter === 'All' || ins.discipline === activeFilter;
        const matchQuery = query === '' || ins.name.toLowerCase().includes(query) || ins.role.toLowerCase().includes(query) || ins.discipline.toLowerCase().includes(query);
        return matchDisc && matchQuery;
      });
      render();
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        // Update active style
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary');
          b.classList.add('bg-surface-container-low', 'text-secondary');
        });
        btn.classList.remove('bg-surface-container-low', 'text-secondary');
        btn.classList.add('bg-primary', 'text-on-primary');
        applyFilter();
      });
    });

    // Search
    let searchTimeout;
    document.getElementById('instructor-search')?.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(applyFilter, 300);
    });

    render();
  }

  /* ─────────────────────────────────────────
     9. Certifications Page
     Hanya aktif kalau #tracks-grid ada.
     5 discipline tracks + credential mockup + alumni holders.
  ───────────────────────────────────────── */
  function initCertificationsPage() {
    if (!document.getElementById('tracks-grid')) return;

    const tracks = [
      {
        discipline: 'Visual Narrative',
        credential: 'Certified Visual Narrative Director',
        icon: 'photo_camera',
        duration: '~6 months',
        price: 2970,
        enrolled: 1240,
        courses: [
          { title: 'Minimalist Brand Identity', instructor: 'Anders Holm' },
          { title: 'Editorial Photography Mastery', instructor: 'Lydia Grant' },
          { title: 'The Language of Luxury Imagery', instructor: 'Celeste Aurore' },
          { title: 'Color Theory for Editorial Excellence', instructor: 'Naomi Sato' },
          { title: 'Motion & Still: Cinematic Storytelling', instructor: 'Rafael Moreno' },
        ],
      },
      {
        discipline: 'Digital Strategy',
        credential: 'Certified Digital Editorial Strategist',
        icon: 'trending_up',
        duration: '~7 months',
        price: 4690,
        enrolled: 980,
        courses: [
          { title: 'The Architecture of Digital Narrative', instructor: 'Julian Vane' },
          { title: 'Algorithmic Content Curation', instructor: 'Sofia Chen' },
          { title: 'Monetising Digital Media at Scale', instructor: 'Marcus Elliot' },
          { title: 'Audience Intelligence & Data Storytelling', instructor: 'Priya Nair' },
          { title: 'Executive Presence in the Digital Age', instructor: 'Thomas Whitfield' },
        ],
      },
      {
        discipline: 'Editorial Design',
        credential: 'Certified Editorial Design Director',
        icon: 'design_services',
        duration: '~7 months',
        price: 4580,
        enrolled: 860,
        courses: [
          { title: 'Modern Magazine Layouts', instructor: 'Marcus Thorne' },
          { title: 'Grid Systems & White Space Mastery', instructor: 'Ingrid Larsen' },
          { title: 'Print to Digital: Transitional Design', instructor: 'Olivier Dumont' },
          { title: 'Cover Design: The Art of First Impression', instructor: 'Alicia Monroe' },
          { title: 'Interactive Editorial: UX for Long-Form', instructor: 'Kwame Osei' },
        ],
      },
      {
        discipline: 'Typography',
        credential: 'Certified Editorial Typographer',
        icon: 'text_fields',
        duration: '~5 months',
        price: 3680,
        enrolled: 640,
        courses: [
          { title: 'Advanced Glyphs & Visual Systems', instructor: 'Dr. Elena Rossi' },
          { title: 'Type as Image: Expressive Letterforms', instructor: 'Hana Yamamoto' },
          { title: 'Variable Fonts & the Future of Reading', instructor: 'Sven Albers' },
          { title: 'Heritage Typefaces: History & Application', instructor: 'Prof. Beatrice Wren' },
        ],
      },
      {
        discipline: 'Artificial Intelligence',
        credential: 'Certified AI Editorial Leader',
        icon: 'smart_toy',
        duration: '~6 months',
        price: 9000,
        enrolled: 510,
        courses: [
          { title: 'Generative AI for Editorial Leaders', instructor: 'Dr. Amara Okafor' },
          { title: 'AI-Augmented Content Strategy', instructor: 'Leon Hartmann' },
          { title: 'Machine Perception & Visual Intelligence', instructor: 'Dr. Yuki Tanaka' },
          { title: 'Ethical AI in Modern Newsrooms', instructor: 'Prof. Isabelle Laurent' },
          { title: 'Prompt Engineering for Creative Executives', instructor: 'Nathan Cole' },
        ],
      },
    ];

    const holders = [
      { name: 'Camille Durand', role: 'Creative Director, Le Figaro', track: 'Editorial Design', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80', year: '2024' },
      { name: 'James Obi', role: 'Head of Visual, Reuters', track: 'Visual Narrative', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80', year: '2024' },
      { name: 'Yuna Park', role: 'Type Director, Wallpaper*', track: 'Typography', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80', year: '2023' },
      { name: 'Marco Bellini', role: 'Digital Strategy Lead, Condé Nast', track: 'Digital Strategy', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80', year: '2024' },
      { name: 'Aisha Mensah', role: 'AI Content Lead, BBC', track: 'Artificial Intelligence', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', year: '2024' },
      { name: 'Tobias Keller', role: 'Senior Designer, Der Spiegel', track: 'Editorial Design', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80', year: '2023' },
      { name: 'Sakura Ito', role: 'Photo Editor, Monocle', track: 'Visual Narrative', avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80', year: '2024' },
      { name: 'Luca Ferretti', role: 'Strategist, Bloomberg Media', track: 'Digital Strategy', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&q=80', year: '2023' },
    ];

    /* ── Render tracks ── */
    function renderTracks() {
      const grid = document.getElementById('tracks-grid');
      grid.innerHTML = tracks.map((t, i) => `
        <div class="border border-outline-variant/20 rounded-lg overflow-hidden group">
          <!-- Track header — clickable to expand -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 cursor-pointer hover:bg-surface-container-low transition-colors" onclick="this.parentElement.querySelector('.track-body').classList.toggle('hidden')">
            <div class="flex items-center gap-6">
              <div class="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-on-primary-container">${t.icon}</span>
              </div>
              <div>
                <span class="text-tertiary text-xs font-bold tracking-widest uppercase mb-1 block">${t.discipline}</span>
                <h3 class="font-headline font-bold text-xl text-black">${t.credential}</h3>
                <div class="flex items-center gap-4 mt-1">
                  <span class="text-secondary text-xs">${t.courses.length} courses · ${t.duration}</span>
                  <span class="text-secondary text-xs">${t.enrolled.toLocaleString()} enrolled</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-6 flex-shrink-0">
              <div class="text-right">
                <span class="text-2xl font-bold text-black block">$${t.price.toLocaleString()}</span>
                <span class="text-secondary text-xs">Full track · save 15%</span>
              </div>
              <button class="px-6 py-3 bg-primary text-on-primary font-bold text-sm rounded hover:bg-primary/80 transition-all">Enroll</button>
              <span class="material-symbols-outlined text-secondary">expand_more</span>
            </div>
          </div>
          <!-- Expandable course list -->
          <div class="track-body hidden border-t border-outline-variant/20 bg-surface-container-low px-8 py-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="material-symbols-outlined text-tertiary text-sm">verified</span>
              <span class="text-xs font-bold text-black tracking-widest uppercase">Courses Included in This Track</span>
            </div>
            <div class="space-y-3">
              ${t.courses.map((c, ci) => `
                <div class="flex items-center gap-4 py-3 border-b border-outline-variant/10 last:border-0">
                  <span class="text-xs font-bold text-outline w-6 text-right flex-shrink-0">${String(ci + 1).padStart(2, '0')}</span>
                  <div class="flex-grow">
                    <span class="text-sm font-medium text-black">${c.title}</span>
                    <span class="text-xs text-secondary block">${c.instructor}</span>
                  </div>
                  <a href="curricula.html" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all flex-shrink-0">
                    View <span class="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </div>`).join('')}
            </div>
            <!-- Digital credential badge preview -->
            <div class="mt-6 pt-6 border-t border-outline-variant/20 flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-tertiary">workspace_premium</span>
              </div>
              <div>
                <span class="text-xs font-bold text-black block">Upon completion you receive:</span>
                <span class="text-xs text-secondary">Digital badge (LinkedIn-ready) · Verified PDF certificate · Credential ID</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    /* ── Render credential mockup ── */
    function renderMockup() {
      const el = document.getElementById('credential-mockup');
      if (!el) return;
      el.innerHTML = `
        <div class="bg-surface rounded-lg border border-outline-variant/20 overflow-hidden shadow-2xl">
          <!-- Certificate top bar -->
          <div class="bg-primary px-8 py-5 flex items-center justify-between">
            <span class="text-white font-headline font-black tracking-tighter text-lg">The Editorial Academy</span>
            <span class="material-symbols-outlined text-tertiary text-2xl">workspace_premium</span>
          </div>
          <!-- Certificate body -->
          <div class="px-8 py-8">
            <p class="text-secondary text-xs uppercase tracking-widest mb-2">This certifies that</p>
            <h3 class="font-headline font-black text-2xl text-black tracking-tighter mb-1">Alexandra Winters</h3>
            <p class="text-secondary text-sm mb-6">has successfully completed all requirements for</p>
            <div class="border-l-2 border-tertiary pl-4 mb-6">
              <span class="font-headline font-bold text-lg text-black block">Certified Editorial Design Director</span>
              <span class="text-tertiary text-xs font-bold tracking-widest uppercase">Editorial Design Track</span>
            </div>
            <div class="flex items-center justify-between text-xs text-secondary pt-4 border-t border-outline-variant/20">
              <span>Issued: November 2024</span>
              <span class="font-mono text-outline">TEA-2024-ED-0041</span>
            </div>
          </div>
          <!-- LinkedIn share bar -->
          <div class="bg-surface-container-low px-8 py-4 flex items-center gap-3">
            <div class="w-6 h-6 bg-[#0077b5] rounded flex items-center justify-center flex-shrink-0">
              <span class="text-white text-xs font-bold">in</span>
            </div>
            <span class="text-xs text-secondary flex-grow">Share to LinkedIn</span>
            <span class="material-symbols-outlined text-secondary text-sm">open_in_new</span>
          </div>
        </div>
      `;
    }

    /* ── Render credential holders ── */
    function renderHolders() {
      const grid = document.getElementById('holders-grid');
      if (!grid) return;
      grid.innerHTML = holders.map(h => `
        <div class="flex flex-col bg-surface border border-outline-variant/20 rounded-lg p-6 hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
              <img class="w-full h-full object-cover" src="${h.avatar}" alt="${h.name}"
                onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'" />
            </div>
            <div>
              <h4 class="font-bold text-sm text-black">${h.name}</h4>
              <span class="text-secondary text-xs">${h.role}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-auto pt-4 border-t border-outline-variant/20">
            <span class="material-symbols-outlined text-tertiary text-sm">workspace_premium</span>
            <span class="text-xs text-secondary flex-grow">${h.track}</span>
            <span class="text-xs text-outline">${h.year}</span>
          </div>
        </div>
      `).join('');
    }

    renderTracks();
    renderMockup();
    renderHolders();
  }

})();