const btnHide = document.querySelector('.raiting__btn-hide');
const productsLength = document.querySelectorAll('.raiting__item').length;
let items = 8;
const firstBreakpoint = '(min-width: 1300px)';

if (btnHide) {
  btnHide.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.raiting__list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if(visItems.length === productsLength) {
      btnHide.style.display = 'none';
    }

    if(firstBreakpoint) {
      items += 3;
      const visItems = array.slice(0, items);
    }
  })
}


