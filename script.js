const quotes = [
  "You have to dream before your dreams can come true.",
  "Excellence happens not by accident. It is a process.",
  "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
  "Man needs his difficulties because they are necessary to enjoy success.",
  "If you want to shine like a sun, first burn like a sun."
];

let currentIndex = 0;
const quoteBox = document.getElementById("quoteBox");

setInterval(() => {
  nextQuote();
}, 5000);

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  quoteBox.textContent = quotes[currentIndex];
}

function changeTheme() {
  const selected = document.getElementById("themeSelector").value;
  document.body.classList.remove("dark", "galaxy");
  document.body.classList.add(selected);
}

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "Play Music 🎵";
  } else {
    bgMusic.play();
    musicBtn.textContent = "Pause Music ⏸️";
  }
  isPlaying = !isPlaying;
});

// ⚡ Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

// 💡 Random Facts Generator
const facts = [
  "Dr. Kalam never owned a television — he read books instead.",
  "He donated most of his salary to charity.",
  "He used to distribute newspapers as a child to support his family.",
  "He read both the Bhagavad Gita and the Quran regularly.",
  "He was the first bachelor and scientist President of India.",
  "He turned down all luxury perks as President and lived simply."
];

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").textContent = facts[randomIndex];
}
