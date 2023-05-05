const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.container button');
const root = document.querySelector(':root');

createBoxes(4);


function createBoxes(sides) {
  //Calculate the amount of boxes
  const boxes = sides ** 2;
  //Create 16 squares within the container div
  for (let i = 0; i < boxes ; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    wrapper.appendChild(div);
  };
  setGridRepeat(sides);
};

function setGridRepeat(n) {
  root.style.setProperty('--grid-repeat', n)
};








