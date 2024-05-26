const textAreaEl = document.querySelector(".textarea");
const wordEl = document.querySelector(".stat-words");
const charEl = document.querySelector(".stat-char");
const twitterEl = document.querySelector(".stat-twitter");
const fbEl = document.querySelector(".stat-fb");

textAreaEl.addEventListener("input", () => {
  let wordCount = textAreaEl.value.split(" ").length;
  if (textAreaEl.value.length === 0) {
    wordCount = 0;
  }
  const charCount = textAreaEl.value.length;
  const twitterCharLeft = 280 - charCount;
  const fbCharLeft = 2200 - charCount;

  if (twitterCharLeft < 0) {
    twitterEl.classList.add("stat-count-limit");
  } else {
    twitterEl.classList.remove("stat-count-limit");
  }

  if (fbCharLeft < 0) {
    fbEl.classList.add("stat-count-limit");
  } else {
    fbEl.classList.remove("stat-count-limit");
  }

  wordEl.innerHTML = wordCount;
  charEl.innerHTML = charCount;
  twitterEl.innerHTML = twitterCharLeft;
  fbEl.innerHTML = fbCharLeft;
});
