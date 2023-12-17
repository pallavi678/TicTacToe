const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}

function checkTie() {
  return !gameBoard.includes('');
}

function handleCellClick(index) {
  if (!gameActive || gameBoard[index] !== '') {
    return;
  }

  gameBoard[index] = currentPlayer;
  document.getElementById(`cell${index}`).textContent = currentPlayer;

  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    gameActive = false;
  } else if (checkTie()) {
    alert('It\'s a tie!');
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell${i}`;
    cell.addEventListener('click', () => handleCellClick(i));
    board.appendChild(cell);
  }
}

createBoard();
