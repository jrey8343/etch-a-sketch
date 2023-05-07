const root = document.querySelector(':root');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.container button');
const range = document.getElementById('range');
const readOut = document.querySelector('.readOut');
const currentBoxes = document.querySelectorAll('.box');
let sides = 8;

createBoxes(sides);

range.addEventListener('input', (e) => {
 sides = e.target.value;
 readOut.textContent = `Generate ${sides} squares per side`;
});

button.addEventListener('click', () => {
  resetCurrentBoxes();
  createBoxes(sides);
});

wrapper.addEventListener('mouseover', (e) => {
  if(e.target.className === 'box') {
    e.target.style.backgroundColor = '#877087';
  }
})

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
  currentBoxes.forEach(currentBox => {
    wrapper.removeChild(currentBox);
  });
};









