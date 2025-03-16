// Loading Animation
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 3000);

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "previous") {
        document.body.classList.add("previous-theme");
        document.getElementById("theme-toggle").textContent = "Switch to New Theme";
    }
});

// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");

    if (body.classList.contains("previous-theme")) {
        body.classList.remove("previous-theme");
        themeToggle.textContent = "Switch to Previous Theme";
        localStorage.setItem("theme", "new");
    } else {
        body.classList.add("previous-theme");
        themeToggle.textContent = "Switch to New Theme";
        localStorage.setItem("theme", "previous");
    }
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

// PDF Viewer
document.getElementById("pdf-input").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = function (e) {
            const pdfFrame = document.getElementById("pdf-frame");
            pdfFrame.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select a valid PDF file.");
    }
});

// HTML Preview
function previewHTML() {
    const htmlContent = document.getElementById("html-input").value;
    const previewFrame = document.getElementById("preview-frame");
    const previewPage = document.getElementById("html-preview-page");

    previewFrame.srcdoc = htmlContent;
    previewPage.style.display = "block";
}

function closePreview() {
    document.getElementById("html-preview-page").style.display = "none";
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
