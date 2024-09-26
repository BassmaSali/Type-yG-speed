const words = [
  "difficulty",
  "never",
  "furniture",
  "thus",
  "transportation",
  "opportunity",
  "beautiful",
  "exactly",
  "standard",
  "kept",
  "baseball",
  "perfectly",
  "term",
  "egg",
  "must",
  "fix",
];

const wordsCount = words.length;

function addClass(el, name) {
  el.className += " " + name;
}

function removeClass(el, name) {
  el.className = el.className.replace(name, "");
}

function randomWord() {
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWord(word) {
  const formattedLetters = word
    .split("")
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");
  return `<div class="word">${formattedLetters}</div>`;
}

function newGame() {
  document.getElementById("words").innerHTML = "";

  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML +=
      formatWord(randomWord()) + " ";
  }

  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".word .letter"), "current");
}

document.getElementById("game").addEventListener("keyup", (event) => {
  const key = event.key;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter ? currentLetter.innerHTML : "";
  const isLetter = key.length == 1;
  const nextWord = document.querySelector(".word.current .letter");

  console.log({ key, expected });

  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key == expected ? "correct" : "incorrect");
      removeClass(currentLetter, "current");
      addClass(currentLetter.nextSibling, "current");
      
      if (nextWord) {
        addClass(nextWord, "current");
      }
    }
  }

});

newGame();
