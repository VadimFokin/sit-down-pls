const checkboxInputs = document.querySelectorAll('.custom-checkbox__input');
const checkboxCost = document.querySelectorAll('.checkbox-cost');
const catalogOptionBtn = document.querySelectorAll('.option__btn');

checkboxInputs.forEach(item => {
  item.addEventListener('change', () => {
    let data = item.dataset.filter;
    if (item.checked == true) {
      catalogOptionBtn.forEach(item => {
        if (item.dataset.option == data) {
          item.parentElement.classList.remove('option--hidden');
        }
      });
    } else {
      catalogOptionBtn.forEach(item => {
        if (item.dataset.option == data) {
          item.parentElement.classList.add('option--hidden');
        }
      });
    }
  });
});


catalogOptionBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.currentTarget;
    let data = target.dataset.option;
    item.parentElement.classList.add('option--hidden');
    checkboxInputs.forEach(item => {
      if (item.dataset.filter == data) {
        item.checked = false;
      }
    });
  });
});
