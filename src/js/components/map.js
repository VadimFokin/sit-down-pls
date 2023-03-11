const map = document.getElementById('map');

if (map) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.75426417229882, 37.62732507131952],
      zoom: 14,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search'
    }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;"></div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([55.752831393462664, 37.63848494650637], {
        balloonContent: `
        <div class="balloon">
          <h4>SitDownPls на Солянке </h4>
          <address>м. Китай-город, ул. Солянка, д.24</address>
          <a href="tel:74958854547" class="balloon__phone" aria-label="Позвонить по номеру: 84958854547">
            <svg>
              <use xlink:href="img/sprite.svg#tel"></use>
            </svg>
            +7 (495) 885-45-47
          </a>
          <div class="balloon__worktime">
            <span>Часы работы:</span>
            с 10:00 до 21:00
          </div>
          <div class="balloon__descr">
            <span>Что здесь:</span>
            шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
          </div>
        </div>
      `,
      },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: './img/icon-map.svg',
          iconImageSize: [32, 22],
          iconImageOffset: [20, 0],
          iconContentOffset: [0],
          iconContentLayout: MyIconContentLayout,
          hideIconOnBalloonOpen: false,
          balloonOffset: [35, 2]
        });

    const myPlacemark = new ymaps.Placemark([55.76147157505062, 37.65023838640963], {
      balloonContent: `
        <div class="balloon">
          <h4>SitDownPls на Покровке </h4>
          <address>м. Китай-город, ул. Покровка, д.24</address>
          <a href="tel:74958854547" class="balloon__phone" aria-label="Позвонить по номеру: 84958854547">
            <svg>
              <use xlink:href="img/sprite.svg#tel"></use>
            </svg>
            +7 (495) 885-45-47
          </a>
          <div class="balloon__worktime">
            <span>Часы работы:</span>
            с 10:00 до 21:00
          </div>
          <div class="balloon__descr">
            <span>Что здесь:</span>
            пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
          </div>
        </div>
      `,
    },
      {
        iconLayout: 'default#imageWithContent',
        iconImageHref: './img/icon-map.svg',
        iconImageSize: [32, 22],
        iconImageOffset: [-20, 0],
        iconContentOffset: [0],
        iconContentLayout: MyIconContentLayout,
        hideIconOnBalloonOpen: false,
      });

    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);

    myMap.behaviors.disable(['scrollZoom']);
  });
}

