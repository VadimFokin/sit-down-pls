const choicesRegionFirst = document.querySelector('.header__choices-region');

if (choicesRegionFirst) {
  const select = choicesRegionFirst.querySelector('.choices-region__select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}
