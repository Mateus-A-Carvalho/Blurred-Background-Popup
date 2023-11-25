const bodyEl = document.querySelector('body');
const blurBtnEl = document.querySelector('#blur-btn');

blurBtnEl.addEventListener("click", () => {
  bluringBgc(blurBtnEl);
})

function bluringBgc(element) {
  element.classList.add('blurred-img');
}
