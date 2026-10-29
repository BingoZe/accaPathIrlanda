window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#mainNav');
  const backToTop = document.querySelector('#backToTop');
  const navbarMenu = document.querySelector('#navbarMenu');
  const currentYear = document.querySelector('#currentYear');

  const updateScrollUI = () => {
    const hasScrolled = window.scrollY > 40;
    nav?.classList.toggle('navbar-scrolled', hasScrolled);
    backToTop?.classList.toggle('show', window.scrollY > 500);
  };

  currentYear.textContent = new Date().getFullYear();
  updateScrollUI();
  window.addEventListener('scroll', updateScrollUI, { passive: true });

  document.querySelectorAll('#navbarMenu .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(navbarMenu);
      if (collapse) collapse.hide();
    });
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // FEEDBACK:
  // 1. Crie um formulário no Microsoft Forms ou Google Forms.
  // 2. Cole o link abaixo.
  // 3. Remova as duas linhas que adicionam as classes "disabled" e "aria-disabled".
  const feedbackUrl = '';
  const feedbackLink = document.querySelector('#feedbackLink');

  if (feedbackUrl && feedbackLink) {
    feedbackLink.href = feedbackUrl;
    feedbackLink.target = '_blank';
    feedbackLink.rel = 'noopener noreferrer';
    feedbackLink.classList.remove('disabled');
    feedbackLink.removeAttribute('aria-disabled');
  }
});
