const readMoreBtn = document.querySelector('.read-more-btn');
const readLessBtn = document.querySelector('.read-less-btn');
const moreText = document.querySelector('.read-more-text');

readMoreBtn.addEventListener('click', onReadMoreBtnClick);
readLessBtn.addEventListener('click', onReadLessBtnClick);

const mainClass = 'invisible';

function onReadMoreBtnClick() {
  moreText.classList.toggle(`${mainClass}`);
  readMoreBtn.classList.toggle(`${mainClass}`);
  readLessBtn.classList.toggle(`${mainClass}`);
}

function onReadLessBtnClick() {
  moreText.classList.toggle(`${mainClass}`);
  readMoreBtn.classList.toggle(`${mainClass}`);
  readLessBtn.classList.toggle(`${mainClass}`);
}
