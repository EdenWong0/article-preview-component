// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded and DOM ready");
  const shareIcons = document.querySelectorAll(".share-icon");
  shareIcons.forEach((icon) => {
    const btn = icon.querySelector(".share-btn");
    const menu = icon.querySelector(".share-menu");
    menu.style.display = "none";

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // close any others
      document.querySelectorAll(".share-icon.active").forEach((other) => {
        if (other !== icon) {
          other.classList.remove("active");
          other.querySelector(".share-menu").style.display = "none";
        }
      });
      // toggle this one
      const isActive = icon.classList.toggle("active");
      menu.style.display = isActive ? "flex" : "none";
    });
  });

  // click outside closes all
  document.addEventListener("click", () => {
    shareIcons.forEach((icon) => {
      icon.classList.remove("active");
      icon.querySelector(".share-menu").style.display = "none";
    });
  });
});
