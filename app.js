const boxContainer = document.querySelector('.box-container');
const resetBtn = document.querySelector('button');
const userInput = prompt('How wide and tall would you like your grid to be?');
let columns = userInput;
let rows = userInput;

function createBoxes(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    boxContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    boxContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let box = document.createElement('div');
    box.classList.add('box');
    boxContainer.appendChild(box);
    
    box.addEventListener('mouseover', function() {
      box.style.background = 'black';
    })
  }
}

function resetGrid() {
  let boxes = boxContainer.children;
  boxes.style.backgroundColor = 'white';
}

resetBtn.addEventListener('click', function() {
  resetGrid();
})

createBoxes(columns, rows)

