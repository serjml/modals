const modals = () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const popups = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    trigger.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        popups.forEach((popup) => {
          popup.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      closePopup(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget && closeClickOverlay) {
        closePopup(modal);
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach((modal) => {
        if (getComputedStyle(modal).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }, time);
  };

  const closePopup = (form) => {
    const popups = document.querySelectorAll('[data-modal]');
    popups.forEach((popup) => {
      popup.style.display = 'none';
    });

    form.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
  };

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '5000px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
};
