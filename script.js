const words = ["apple", "banana", "cherry", "date", "elderberry", "soccer"];
let currentWord = "";
let wordIndex = 0;

const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const startButton = document.getElementById("startButton");
const resultDisplay = document.getElementById("result");

startButton.addEventListener("click", startGame);

function startGame() {
    wordIndex = 0;
    wordInput.value = "";
    resultDisplay.textContent = "";
    nextWord();
}

function nextWord() {
    if (wordIndex < words.length) {
        currentWord = words[wordIndex];
        wordDisplay.textContent = currentWord;
        wordInput.focus();
    } else {
        wordDisplay.textContent = "ゲーム終了！";
        resultDisplay.textContent = "すべての単語を入力しました！";
    }
}

wordInput.addEventListener("input", checkInput);

function checkInput() {
    // 大文字と小文字を区別してチェック
    if (wordInput.value === currentWord) {
        resultDisplay.textContent = "正解！";
        wordIndex++;
        wordInput.value = "";
        nextWord();
    } else if (currentWord.indexOf(wordInput.value) !== 0) {
        resultDisplay.textContent = "間違い！";
    }
}
