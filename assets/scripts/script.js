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
  elementToAppear.style.visibility = 'visible';
}

function closingElement (element, bgcBlurred, elementBlurred) {
  element.style.visibility = 'hidden';
  bgcBlurred.classList.remove('bgc-blurred');
  elementBlurred.classList.remove('blurred');
}