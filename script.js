(function () {
  const root = document.documentElement;
  const toggleButton = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');

  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  function updateButtonLabel() {
    const theme = root.getAttribute('data-theme');
    toggleButton.textContent = theme === 'dark' ? 'LIGHT' : 'DARK';
  }

  updateButtonLabel();

  toggleButton.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateButtonLabel();
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

