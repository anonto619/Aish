const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "Awesome! 😄 Glad you're feeling entertained!";
});

noBtn.addEventListener("click", () => {
  message.textContent = "Oh no… let’s find something fun for you!";
});
