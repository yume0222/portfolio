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
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};
const menuClose = () => {
  mask.classList.remove('open');
  nav.animate({translate: [0, '-100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [0, 1], menuOptions});
  });
}
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  if (hamburger.classList.contains('open')) {
    mask.classList.add('open');
    nav.animate({translate: ['-100vw', 0]}, menuOptions);
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
// メニューを閉じる
mask.addEventListener('click', () => {
  menuClose();
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    menuClose();
  });
});
