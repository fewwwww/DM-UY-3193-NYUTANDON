const counterDom = document.getElementById('simple-javascript-counter');
const buttonDom = document.getElementById('simple-javascript-button');

buttonDom.addEventListener('click', () => {
  let counterNum = Number(counterDom.innerText);
  counterDom.innerText = counterNum + 1;
});
