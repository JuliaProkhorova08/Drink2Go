const prev = document.querySelector('.pagination__button--prev');
const next = document.querySelector('.pagination__button--next');

const pagination = document.querySelectorAll('.pagination__button');

function thisDot(index) {
  pagination.forEach((item) =>
    item.classList.remove('pagination__button--active')
  );
  pagination[index].classList.add('pagination__button--active');

  if (index === 1) {
    prev.style.display = 'none';
    next.style.display = 'block';
    pagination[3].style.marginRight = '0';
  }

  if (index === 3) {
    next.style.display = 'none';
    prev.style.display = 'block';
    pagination[index].style.marginRight = '104px';
  }

  if (1 < index && index < 3) {
    prev.style.display = 'block';
    next.style.display = 'block';
    pagination[3].style.marginRight = '0';
  }
}

pagination.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    thisDot(index);
    e.target.classList.add('pagination__button--active');
  });
});
