document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("#navbarMenu .nav-link, #navbarMenu .btn").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbarMenu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
