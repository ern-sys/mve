const navToggleButton = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');

if (navToggleButton && navList) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

