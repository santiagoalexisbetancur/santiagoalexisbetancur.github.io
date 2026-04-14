window.initializeVanillaInteractions = function initializeVanillaInteractions() {
  const typing = document.querySelector('.typing');
  if (typing) {
    setTimeout(() => {
      typing.style.borderRight = 'none';
      typing.classList.add('finished');
    }, 2200);
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document
    .querySelectorAll('.project-card, .cert-card, .contact-item, .section-title, .about-text p, .about-photo, .exp-container, .hero-btns')
    .forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
      revealObserver.observe(el);
    });

  document.querySelectorAll('.exp-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.exp-tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.exp-panel').forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.panel);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });
};
