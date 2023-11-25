const bodyEl = document.querySelector('body');
const blurBtnEl = document.querySelector('#blur-btn');

blurBtnEl.addEventListener("click", () => {
  bluringBgc(bodyEl);
})

function bluringBgc(element) {
  element.classList.add('blurred-img');
}
