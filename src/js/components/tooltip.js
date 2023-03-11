import { createPopper, right} from '@popperjs/core';

const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt');
const arrow = document.querySelector('#arrow');

if(el) {
  createPopper(el, tooltip, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [5, 10],
        },
      },
    ],
  });
}

