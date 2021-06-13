let boxContainer = document.querySelector('.box-container');
let numInput = prompt('What number would you like?');
let number = Math.pow(numInput, 2);

function createBoxes(number) {
    for (let i = 0; i < number; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        boxContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        boxContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        boxContainer.appendChild(box);
    }
}

createBoxes(number);