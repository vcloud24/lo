// Loading Animation
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 3000);
});

// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Camera
function startCamera() {
    const video = document.getElementById("video");
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => video.srcObject = stream)
        .catch(err => alert("Camera access denied."));
}

// Web Browser
function openWebsite() {
    const url = document.getElementById("url-input").value;
    const iframe = document.getElementById("browser-frame");
    iframe.src = url.startsWith("http") ? url : "http://" + url;
}

// HTML Preview
function previewHTML() {
    const htmlContent = document.getElementById("html-input").value;
    const previewWindow = window.open("", "_blank");
    previewWindow.document.open();
    previewWindow.document.write(htmlContent);
    previewWindow.document.close();
}

// Tic Tac Toe
let board = Array(9).fill(null);
let currentPlayer = "X";

function renderBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    board.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.textContent = cell;
        cellDiv.onclick = () => makeMove(index);
        gameBoard.appendChild(cellDiv);
    });
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderBoard();
        document.getElementById("game-status").textContent = `Player ${currentPlayer}'s turn`;
        checkWinner();
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];
    winningCombinations.forEach(combo => {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetGame();
        }
    });
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = "X";
    renderBoard();
    document.getElementById("game-status").textContent = `Player X's turn`;
}

// Initialize
document.addEventListener("DOMContentLoaded", renderBoard);
