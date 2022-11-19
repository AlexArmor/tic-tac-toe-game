const cellArray = new Array(9);
const gameField = document.querySelector('.field');
let playerX = true;

for (let i = 0; i < 9; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField.append(cell);
}

gameField.addEventListener('click', onGameFieldClick);

function onGameFieldClick(event) {
    const index = [...gameField.children].indexOf(event.target);
    if (playerX) {
        event.target.textContent = 'X';
    }
};
