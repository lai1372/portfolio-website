const button = document.querySelector(".button-toggle");

function onToggle(event) {
  document.body.classList.toggle("dark-theme");
}
button.addEventListener("click", onToggle);
