const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll para baixo -> esconde o header
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 0.3s ease-in-out";
  } else {
    // Scroll para cima -> mostra o header
    header.style.transform = "translateY(0)";
    header.style.transition = "transform 0.3s ease-in-out";
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Evita scroll negativo
});
