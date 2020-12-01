var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');

var logKeyCode = function (evt) {
  console.log(evt.code);
  if (evt.code === 'Escape') {
    modalBg.classList.remove('bg-active');
    document.body.removeEventListener('keyup', logKeyCode);
  }
};

modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
  document.body.addEventListener('keyup', logKeyCode);
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
  document.body.removeEventListener('keyup', logKeyCode);
});

modalBg.addEventListener('click', function (evt) {
  if (evt.target.matches('.modal-bg')) {
    modalBg.classList.remove('bg-active');
    document.body.removeEventListener('keyup', logKeyCode);
  }
});
