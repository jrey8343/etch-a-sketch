const root = document.querySelector(':root');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.container button');
const range = document.getElementById('range');
const readOut = document.querySelector('.readOut');
let sides = 4;

createBoxes(sides);

range.addEventListener('input', (e) => {
 sides = e.target.value;
 readOut.textContent = `${sides} squares per side`;
});

button.addEventListener('click', () => {
  resetCurrentBoxes();
  createBoxes(sides);

});

function createBoxes(n) {
  //Calculate the amount of boxes
  const boxes = n ** 2;
  //Create 16 squares within the container div
  for (let i = 0; i < boxes ; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    wrapper.appendChild(div);
  };
  setGridRepeat(n);
};

function setGridRepeat(n) {
  root.style.setProperty('--grid-repeat', n)
};

function resetCurrentBoxes() {
  const currentBoxes = document.querySelectorAll('.box');
  currentBoxes.forEach(currentBox => {
    wrapper.removeChild(currentBox);
  });
};









