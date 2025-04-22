const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
})

// const btn = document.querySelector('.btn-menu');
// const nav = document.querySelector('.main-nav');
// btn.addEventListener('click', () => {
//   nav.classList.toggle('open-menu');
//   btn.innerHTML = nav.classList.contains('open-menu') ? 'Close' : 'Menu';
// });