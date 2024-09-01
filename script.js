const fortuneCookie = document.getElementById("fortune-cookie");
const fortuneText = document.getElementById("fortune");
const backgroundMusic = document.getElementById("background-music");
const fortunes = [
  "🐈‍",
  "...",
  "hi",
  "i find your story cute",
  "and",
  "idk if this ",
  "is related sa akong repost",
  "but it says na",
  "if mag mirror shot",
  "sa story",
  "kay like mo amin na",
  "and since nag mirror shot ka",
  "tho not sure if it's related sa repost nako",
  "but if dili kay",
  "ayaw nag e click ang cat",
  "...",
  "...",
  "...",
  "pero sige",
  "kay gi click pa nimo",
  "then",
  "this cat will do its job for me",
  "and",
  "since wa man say mawala if magpaka honest",
  "and I might regret it later if di pa nako masulti",
  "then",
  "I js",
  "want to",
  "let you",
  "know",
  "na",
  "na",
  "naa",
  "naaa",
  "naaaa",
  "naaaaa",
  "naaaaaa",
  "naaaaaaa",
  "naaaaaaaa",
  "naaaaaaaaa",
  "naaaaaaaaaa",
  "naaaaaaaaaaa",
  "naaaaaaaaaaaa",
  "wait",
  "wait",
  "sooooooo",
  "ooooooooo",
  "ooooooooooo",
  "I’ve been trying to tell you this for a long time",
  "but haven't had the chance to do so",
  "and prolly late na guro ko nako ma sulti",
  "but",
  "I just wanna say",
  "na",
  "I",
  "I",
  "like",
  "you",
  "and",
  "have",
  "always",
  "felt this way about you.",
  "...",
  "...",
  "...",
  "...",
  "nauwaw nako",
  "...",
  "...",
  "but anyway",
  "you don’t need to feel bad or pressured",
  "or even reciprocate it at all.",
  "I completely agree that",
  "we should let things unfold naturally",
  "I believe na",
  "if the person is truly meant for you,",
  "things will naturally fall into place",
  "🌷",
  "🌷"
  

];

let currentFortuneIndex = 0;
let isMusicPlaying = false; // Track if the music is already playing

fortuneCookie.addEventListener("click", () => {
  fortuneText.textContent = fortunes[currentFortuneIndex];
  fortuneText.style.opacity = 1;

  currentFortuneIndex = (currentFortuneIndex + 1) % fortunes.length;

  fortuneCookie.style.transform = "scale(0.9)";
  setTimeout(() => {
    fortuneCookie.style.transform = "scale(1)";
  }, 150);

  // Play music on the first click
  if (!isMusicPlaying) {
    backgroundMusic.play();
    isMusicPlaying = true; // Set the flag to true once the music starts playing
  }
});