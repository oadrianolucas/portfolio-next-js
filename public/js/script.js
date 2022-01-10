const btn = document.querySelector(".mobile-menu-button");
const btn_close = document.querySelector(".mobile-menu-button-close");
const sidebar = document.querySelector(".sidebar");
btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
btn_close.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
