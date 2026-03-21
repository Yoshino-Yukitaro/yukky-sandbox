document.getElementById("menu").addEventListener("click", () => {
  const menu = document.getElementById("hidden_menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");
  const button = document.getElementById("menu");

  const isOpen = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden", !isOpen);
  iconClose.classList.toggle("hidden", isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
});
