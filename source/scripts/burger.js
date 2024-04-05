const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav--active');
  menuBtn.classList.toggle('header__burger--opened');
  menuBtn.classList.toggle('header__burger--close');
});
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    menu.classList.remove('nav--active');
    menuBtn.classList.remove('header__burger--opened');
  }
});
