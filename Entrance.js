const btn = document.getElementById("enterBtn");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  left.classList.add("open-left");
  right.classList.add("open-right");
  overlay.style.opacity = "0";

  // Optional: redirect after animation
  // setTimeout(() => {
  //   window.location.href = "home.html";
  // }, 1500);
});
