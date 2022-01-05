// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clickA (event){
  event.preventDefault();
}
HREF_LINK.addEventListener('click', clickA);

function clickC(event){
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', clickC);

function clickT(event){
  const letra = event.key;
  if (letra !== 'a'){
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener('keypress', clickT);
