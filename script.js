// Show and Hide Sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Time Teller
function showTime() {
    const time = new Date().toLocaleTimeString();
    document.getElementById('time-display').textContent = `The current time is: ${time}`;
}

// Camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById('camera-feed').srcObject = stream;
    } catch (error) {
        alert('Error accessing camera: ' + error.message);
    }
}

// Web Browser
function loadWebsite() {
    const url = document.getElementById('url-input').value;
    const validUrl = url.startsWith('http') ? url : 'https://' + url;
    document.getElementById('browser-frame').src = validUrl;
}

// Tic Tac Toe Multiplayer
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (board[row][col] === '' && !gameOver) {
        board[row][col] = currentPlayer;
        renderBoard();
        if (checkWin()) {
            document.getElementById('tic-tac-toe-status').textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (board.flat().every(cell => cell !== '')) {
            document.getElementById('tic-tac-toe-status').textContent = 'It\'s a draw!';
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('tic-tac-toe-status').textContent = `Player ${currentPlayer}'s turn.`;
        }
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cell.textContent = board[row][col];
    });
}

function checkWin() {
    const winConditions = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]
    ];
    return winConditions.some(condition => condition.every(cell => cell === currentPlayer));
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('tic-tac-toe-status').textContent = `Player ${currentPlayer}'s turn.`;
    renderBoard();
}

// Initialize the first visible section
showSection('timeTeller');
