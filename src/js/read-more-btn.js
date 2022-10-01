// FOR SECTION ABOUT
const mainClass = 'invisible';

const readMoreBtnAbout = document.querySelector('.read-more-btn__about');
const readLessBtnAbout = document.querySelector('.read-less-btn__about');
const moreTextAbout = document.querySelector('.read-more-text__about');

readMoreBtnAbout.addEventListener('click', onReadMoreBtnAboutClick);
readLessBtnAbout.addEventListener('click', onReadLessBtnAboutClick);

function onReadMoreBtnAboutClick(e) {
  moreTextAbout.classList.toggle(`${mainClass}`);
  readMoreBtnAbout.classList.toggle(`${mainClass}`);
  readLessBtnAbout.classList.toggle(`${mainClass}`);
}

function onReadLessBtnAboutClick() {
  moreTextAbout.classList.toggle(`${mainClass}`);
  readMoreBtnAbout.classList.toggle(`${mainClass}`);
  readLessBtnAbout.classList.toggle(`${mainClass}`);
}

// FOR SECTION PROGRAM
const readMoreBtnProgram = document.querySelector('.read-more-btn__program');
const readLessBtnProgram = document.querySelector('.read-less-btn__program');
const moreTextProgram = document.querySelector('.read-more-text__program');

readMoreBtnProgram.addEventListener('click', onReadMoreBtnProgramClick);
readLessBtnProgram.addEventListener('click', onReadLessBtnProgramClick);

function onReadMoreBtnProgramClick() {
  moreTextProgram.classList.toggle(`${mainClass}`);
  readMoreBtnProgram.classList.toggle(`${mainClass}`);
  readLessBtnProgram.classList.toggle(`${mainClass}`);
}

function onReadLessBtnProgramClick() {
  moreTextProgram.classList.toggle(`${mainClass}`);
  readMoreBtnProgram.classList.toggle(`${mainClass}`);
  readLessBtnProgram.classList.toggle(`${mainClass}`);
}
