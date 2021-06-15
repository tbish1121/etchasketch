const boxContainer = document.querySelector('.box-container');
const resetBtn = document.querySelector('.reset');
let blackBtn = document.querySelector('.blackButton');
let black = false;
const userInput = prompt('How wide and tall would you like your grid to be?');
let columns = userInput;
let rows = userInput;

function getBlackColor() {
  return 'black';
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 253);
  let g = Math.floor(Math.random() * 253);
  let b = Math.floor(Math.random() * 253);
  return `rgb(${r}, ${g}, ${b})`;
}


function createGrid(columns, rows) {
  for (let i = 0; i < columns * rows; i++) {
    boxContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    boxContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let box = document.createElement('div');
    box.classList.add('box');
    boxContainer.appendChild(box);
    
    box.addEventListener('mouseover', function() {
      if (black == false) {
      box.style.background = getRandomColor();
      } else {
        box.style.background = getBlackColor();
      }
    })
    
    resetBtn.addEventListener('click', function() {
        box.style.background = 'white';
    })  
  }
}

blackBtn.addEventListener('click', function() {
  if (black == false) {
  black = true;
  blackBtn.innerHTML = '<i class="fas fa-check-circle fa-2x"></i>'
  } else {
    black = false;
    blackBtn.innerHTML = '<i class="far fa-check-circle fa-2x"></i>'
  }
})

createGrid(columns, rows)

