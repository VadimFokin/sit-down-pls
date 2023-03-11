const choicesCategory = document.querySelector('.choices-category');

if (choicesCategory) {
  const select = choicesCategory.querySelector('.choices-category__select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      flippedState: 'is-flip',
    },
  });
}
