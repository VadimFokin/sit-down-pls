document.addEventListener('DOMContentLoaded', () => {
  const menuBtns = document.querySelectorAll('.filter-dropdown__btn');
  const dropdowns = document.querySelectorAll('.dropdown');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let dropdown = currentBtn.closest('.filter-dropdown__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if(el !== currentBtn) {
          el.classList.remove('filter-dropdown__btn--active');
        }
      });

      dropdowns.forEach(el => {
        if(el !== dropdown) {
          el.classList.remove('dropdown--active');
        }
      });

      dropdown.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('filter-dropdown__btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-dropdown')) {
      menuBtns.forEach(el => {
        el.classList.remove('filter-dropdown__btn--active');
      });

      dropdowns.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });
});
