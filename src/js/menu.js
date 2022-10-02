const openMenuBtn = document.querySelector('[data-action="open-menu"]');
const closeMenuBtn = document.querySelector('[data-action="close-menu"]');
const menuBackdrop = document.querySelector('.js-backdrop');
const listMenu = document.querySelector('.menu__list');

openMenuBtn.addEventListener('click', onOpenMenu);
closeMenuBtn.addEventListener('click', onCloseMenu);
listMenu.addEventListener('click', onlistClick);

function onOpenMenu() {
  document.body.classList.add('show-menu');
}

function onCloseMenu() {
  document.body.classList.remove('show-menu');
}

function onlistClick(e) {
  if (e.target.classList.contains('menu__link')) {
    onCloseMenu();
  }
}
