const prevButton = document.querySelector('.slider__button--left');
const nextButton = document.querySelector('.slider__button--right');

const paginationButtons = document.querySelectorAll('.slider__pagination-item');
const sliderImages = document.querySelectorAll('.slider__item');
const sliderList = document.querySelector('.slider__list');
const bgHeroBlock = document.querySelector('.hero-container');

let sliderCount = 0;
let sliderWidth = document.querySelector('.slider').offsetWidth;

if (getComputedStyle(sliderList).transform === 'matrix(1, 0, 0, 1, 0, 0)') {
  bgHeroBlock.style.backgroundColor = '#f3ebe1';
}

const showSlide = () => {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderList.style.width = `${sliderWidth} + 'px'`;
  sliderImages.forEach((item) => (item.style.width = `${sliderWidth} + 'px'`));

  rollSlider();
};
showSlide();

const nextSlide = () => {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
};

const prevSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }

  rollSlider();
  thisSlide(sliderCount);
};

function rollSlider() {
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  paginationButtons.forEach((item) =>
    item.classList.remove('slider__pagination-item--active')
  );
  paginationButtons[index].classList.add('slider__pagination-item--active');

  switch (index) {
    case 0:
      prevButton.setAttribute('disabled', 'disabled');
      nextButton.removeAttribute('disabled', 'disabled');
      bgHeroBlock.style.backgroundColor = '#f3ebe1';
      break;

    case 1:
      prevButton.removeAttribute('disabled', 'disabled');
      nextButton.removeAttribute('disabled', 'disabled');
      bgHeroBlock.style.backgroundColor = '#eae6fc';
      break;

    case 2:
      nextButton.setAttribute('disabled', 'disabled');
      prevButton.removeAttribute('disabled', 'disabled');
      bgHeroBlock.style.backgroundColor = '#e5e6e8';
      break;
  }
}

paginationButtons.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    e.target.classList.add('slider__pagination-item--active');
  });
});

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

window.addEventListener('resize', showSlide);
