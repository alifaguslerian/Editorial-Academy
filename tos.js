 const sections = document.querySelectorAll('.section[id]');
  const links = document.querySelectorAll('.toc-list a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.toc-list a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  sections.forEach(s => obs.observe(s));