let current_verse = parseInt("{{verseNumber}}");
let ayattti;
let Surahs = [];
// let rightAnswerCounter = 0;
// let responses = [];

let userScore = localStorage.getItem("score") || 0;

//================
// new feature: test your memorization
const score = document.getElementById("score");
const guess = document.getElementById("guess");
const test = document.getElementById("test");
const submitAnswerButton = document.getElementById("nButton");
const answer = document.getElementById("answer");
submitAnswerButton.addEventListener("click", (e) => {
  checkAnswer(answer.value);
});
guess.addEventListener("click", (e) => {
  if (guess.innerText == "Guess the surah?") {
    test.style.display = "block";
    guess.innerText = "cancel test";
    score.innerText = userScore;
  } else {
    test.style.display = "none";
    guess.innerText = "Guess the surah?";
    saveScore();
  }
});

//================================================

function Initializer(theVerses, verse_number, surahs_info) {
  ayattti = JSON.parse(theVerses);
  current_verse = parseInt(verse_number);
  Surahs = JSON.parse(surahs_info);
}

const random = document.getElementById("random");
const mainH = document.getElementById("verse");
random.addEventListener("click", (e) => {
  let { content, verseNumber } = getRandomAyah(ayattti);
  mainH.innerText = content;
  current_verse = verseNumber;
});

function getRandomAyah(ayats) {
  let verseIndex = Math.floor(Math.random() * 6236 + 1);
  return { content: ayats[verseIndex].content, verseNumber: verseIndex };
}

const next = document.getElementById("next");
next.addEventListener("click", (e) => {
  getNext(current_verse);
});

const previous = document.getElementById("previous");
previous.addEventListener("click", (e) => {
  getPre(current_verse);
});

function getNext(current) {
  mainH.innerText = ayattti[current + 1].content;
  current_verse = current + 1;
}
function getPre(current) {
  mainH.innerText = ayattti[current - 1].content;
  current_verse = current - 1;
}

function checkAnswer(ans) {
  //  console.log(Surahs[ayattti[current_verse].surah_number-1].name)
  if (ans == "") return;

  let rightAnswer = Surahs[ayattti[current_verse].surah_number - 1].name;
  if (rightAnswer == ans) {
    score.innerText = ++userScore;
    document.getElementById("fire").style.display = "block";
  } else {
    let wrongResponse = ` \t خطأ!
    الاجابة الصحيحة: ${rightAnswer}.
    `;

    alert(wrongResponse);
  }
  answer.value = "";
  random.click();
  setTimeout(() => {
    document.getElementById("fire").style.display = "none";
  }, 1000);
}

function saveScore() {
  let prompt = confirm("save the score?!");
  if (prompt == true) {
    localStorage.setItem("score", userScore);
  } else {
    localStorage.setItem("score", 0);
  }
}
