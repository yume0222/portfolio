// ローディング
const loadingElement = document.querySelector('#loading');
window.addEventListener('load', () => {
  loadingElement.classList.add('loaded');
});

// ナビゲーション
const nav = document.querySelector('.main-nav');
const menuItems = document.querySelectorAll('.main-nav__item');
const links = document.querySelectorAll('header a');
const hamburger = document.querySelector('.hamburger');
const mask = document.querySelector('#mask');
const menuClose = () => {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  mask.classList.remove('open');
  menuItems.forEach((menuItem) => {
    menuItem.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 1400,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
};
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  if (hamburger.classList.contains('open')) {
    nav.classList.add('open');
    mask.classList.add('open');
    menuItems.forEach((menuItem, index) => {
      menuItem.animate(
        {
          opacity: [0, 1],
          translate: ['-2rem', 0],
        },
        {
          duration: 2400,
          easing: 'ease',
          delay: index * 300,
          fill: 'forwards',
        }
      );
    });
  } else {
    menuClose();
  }
});
mask.addEventListener('click', () => {
  menuClose();
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    menuClose();
  });
});
