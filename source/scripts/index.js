const sliderPrice = document.querySelector('.filter-price__range');
const startPrice = document.querySelector('.filter-price__input--min');
const endPrice = document.querySelector('.filter-price__input--max');

noUiSlider.create(sliderPrice, {
  start: [0, 900],
  step: 1,
  connect: true,
  padding: 0,
  range: {
    min: 0,
    max: 1000,
  },
  format: {
    to: function (value) {
      return parseInt(value, 10);
    },
    from: function (value) {
      return parseInt(value, 10);
    },
  },
});

sliderPrice.noUiSlider.on('change', (values) => {
  startPrice.value = values[0];
  endPrice.value = values[1];
});

sliderPrice.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];

  if (handle) {
    endPrice.value = value;
  } else {
    startPrice.value = value;
  }
});

startPrice.addEventListener('change', () => {
  sliderPrice.noUiSlider.set([this.value, null]);
});

endPrice.addEventListener('change', () => {
  sliderPrice.noUiSlider.set([null, this.value]);
});
