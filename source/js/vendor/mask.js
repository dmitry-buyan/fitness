import IMask from 'imask';

export const initPhoneMask = () => {
  const phoneFields = document.querySelectorAll('[data-user-phone]');

  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };

  phoneFields.forEach((phoneField) => IMask(phoneField, maskOptions));
};
