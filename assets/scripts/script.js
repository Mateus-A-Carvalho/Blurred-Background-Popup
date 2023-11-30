const bodyEl = document.querySelector('body');
const blurBtnEl = document.querySelector('#blur-btn');
const formEl = document.querySelector('#form')
const sectionEl = document.querySelector('#main-section');
const closeBtn = document.querySelector('#close-toogle');

blurBtnEl.addEventListener("click", () => {
  bluringBgc(bodyEl, sectionEl, formEl);
})

document.addEventListener("click", (e) => {
  let element = e.target;

  if(element === bodyEl || element === closeBtn || element === sectionEl) return closingElement(formEl, bodyEl, sectionEl);
})

function bluringBgc(bgcBlurred, elementBlurred, elementToAppear) {
  bgcBlurred.classList.add('bgc-blurred', 'transition-time');
  elementBlurred.classList.add('blurred', 'transition-time');
  elementToAppear.classList.add('slide-in-blurred-top');
  elementToAppear.classList.remove('slide-out-blurred-top')
  elementToAppear.style.visibility = 'visible';
}

function closingElement (element, bgcBlurred, elementBlurred) {
  element.classList.add('slide-out-blurred-top')
  element.classList.remove('slide-in-blurred-top')
  bgcBlurred.classList.remove('bgc-blurred');
  elementBlurred.classList.remove('blurred');
}