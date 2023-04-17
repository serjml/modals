# modals
## модуль универсального модального окна

функция **bindModal** открытия модального окна принимает:
  + **triggerSelector** - селектор триггера открытия модального окна (кнопки, ссылки и тд)
  + **modalSelector** - селектор модального окна
  + **closeSelector** - селектор кнопки закрытия модального окна
  + **closeClickOverlay** - закрытие модального окна по клику на оверлей (по умолчанию true)

---

функция **showModalByTime** показывает модальное окно (если не открыто какое либо модальное окно) с селектором **selector** через время **time** после открытия страницы.

---

функция **calcScroll** убирает баг смещения на ширину скролла при открытии модалки

---

функция **openByScroll** открывает модальное окно когда страница была прокручена до конца и не одно модальное окно не было открыто до этого
