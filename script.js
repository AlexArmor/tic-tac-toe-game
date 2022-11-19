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
    if (cellArray[0] === cellArray[1] && cellArray[0] === cellArray[2] && cellArray[0]) {
        winnerMessage(cellArray[0]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[0] === cellArray[3] && cellArray[0] === cellArray[6] && cellArray[0]) {
        winnerMessage(cellArray[0]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[0] === cellArray[4] && cellArray[0] === cellArray[8] && cellArray[0]) {
        winnerMessage(cellArray[0]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[3] === cellArray[4] && cellArray[3] === cellArray[5] && cellArray[3]) {
        winnerMessage(cellArray[3]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[6] === cellArray[7] && cellArray[6] === cellArray[8] && cellArray[6]) {
        winnerMessage(cellArray[6]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[1] === cellArray[4] && cellArray[1] === cellArray[7] && cellArray[1]) {
        winnerMessage(cellArray[1]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[2] === cellArray[5] && cellArray[2] === cellArray[8] && cellArray[2]) {
        winnerMessage(cellArray[2]);
        gameField.removeEventListener('click', onGameFieldClick);
    } else if (cellArray[2] === cellArray[4] && cellArray[2] === cellArray[6] && cellArray[2]) {
        winnerMessage(cellArray[2]);
        gameField.removeEventListener('click', onGameFieldClick);
    }
}

function winnerMessage(winnerName) {
    const message = document.createElement('p');
    message.textContent = `${winnerName} - WIN!`;
    gameField.after(message);
}