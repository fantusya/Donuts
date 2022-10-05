import validator from 'validator';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const registrationForm = document.querySelector('[name="registration"]');
const inputName = document.querySelector('[name=username]');
const inputPhone = document.querySelector('[name="userphone"]');
const inputEmail = document.querySelector('[name="usermail"]');

registrationForm.addEventListener('submit', onregistrationFormSubmit);
inputName.addEventListener('blur', onInputNameBlur);
inputPhone.addEventListener('blur', onInputPhoneBlur);
inputEmail.addEventListener('blur', onInputEmailBlur);

function onInputNameBlur(e) {
  e.currentTarget.classList.remove('error');

  if (
    !validator.isAlpha(e.currentTarget.value.trim()) ||
    e.currentTarget.value.trim().length < 3
  ) {
    e.currentTarget.classList.add('error');
    Notify.failure('Please enter correct name!');
    return;
  }
}

function onInputPhoneBlur(e) {
  e.currentTarget.classList.remove('error');

  if (!validator.isMobilePhone(e.currentTarget.value.trim())) {
    e.currentTarget.classList.add('error');
    Notify.failure('Please enter correct phone number!');
    return;
  }
}

function onInputEmailBlur(e) {
  e.currentTarget.classList.remove('error');

  if (!validator.isEmail(e.currentTarget.value.trim())) {
    e.currentTarget.classList.add('error');
    Notify.failure('Please enter correct email address!');
    return;
  }
}

function onregistrationFormSubmit(e) {
  e.preventDefault();
  let arrayOfInputs = document.querySelectorAll('.registration__form-input');

  for (const input of arrayOfInputs) {
    if (input.value === '' || input.classList.contains('error')) {
      Notify.warning('Please fill in ALL fields with CORRECT data!');
      return;
    }
  }
  e.currentTarget.reset();
  Notify.success('You are registered on the master class!', {
    background: 'brown',
  });
}
