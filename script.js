const cellArray = new Array(9);
const gameField = document.querySelector('.field');
let playerX = true;

for (let i = 0; i < 9; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'kuk');
    gameField.append(cell);
}

gameField.addEventListener('click', onGameFieldClick);

function onGameFieldClick({ target }) {
    const index = [...gameField.children].indexOf(target);
    if (!target.classList.value.includes('cell')) {
        return;
    }
    if (target.textContent) {
        return
    };
    target.textContent = playerX ? 'X' : 'O';

    playerX = !playerX;
    cellArray[index] = target.textContent;

    isGameOver();
};

function isGameOver() {
    if (cellArray[0] === cellArray[1] && cellArray[0] === cellArray[2] || cellArray[0] === cellArray[3] && cellArray[0] === cellArray[6] || cellArray[0] === cellArray[3] && cellArray[0] === cellArray[6]) {
        console.log('Win');
    }
}