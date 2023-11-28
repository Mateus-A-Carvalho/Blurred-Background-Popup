const bodyEl = document.querySelector('body');
const blurBtnEl = document.querySelector('#blur-btn');
const formEl = document.querySelector('#form')
const sectionEl = document.querySelector('#main-section');

blurBtnEl.addEventListener("click", () => {
  bluringBgc(bodyEl, sectionEl, formEl);
})

function bluringBgc(bgcBlurred, elementBlurred, elementToAppear) {
  bgcBlurred.classList.add('bgc-blurred', 'transition-time');
  elementBlurred.classList.add('blurred', 'transition-time');
  elementToAppear.style.visibility = 'visible';
}
