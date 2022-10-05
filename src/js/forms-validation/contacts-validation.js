import validator from 'validator';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsForm = document.querySelector('[name="contacts"]');
const inputEmail = document.querySelector('[name="usercontactmail"]');

contactsForm.addEventListener('submit', onContactsFormSubmit);
inputEmail.addEventListener('blur', onInputEmailBlur);

function onInputEmailBlur(e) {
  e.currentTarget.classList.remove('error');

  if (!validator.isEmail(e.currentTarget.value.trim())) {
    e.currentTarget.classList.add('error');
    Notify.failure('Please enter correct email address!');
    return;
  }
}

function onContactsFormSubmit(e) {
  e.preventDefault();
  let arrayOfInputs = document.querySelectorAll('.contacts__form-input');

  for (const input of arrayOfInputs) {
    if (input.value === '' || input.classList.contains('error')) {
      Notify.warning('Please fill in ALL fields with CORRECT data!');
      return;
    }
  }
  e.currentTarget.reset();
  Notify.success('Your question is recorded!', {
    background: '#AB816C',
  });
}
