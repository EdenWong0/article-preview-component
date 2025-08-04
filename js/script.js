document.addEventListener("DOMContentLoaded", () => {
  const shareIcons = document.querySelectorAll(".share-icon");

  shareIcons.forEach((icon) => {
    const btn = icon.querySelector(".share-btn");
    const menu = icon.querySelector(".share-menu");
    const articleCard = icon.closest(".article-card");

    if (menu) menu.style.display = "none";

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all others
      document.querySelectorAll(".share-icon").forEach((i) => {
        i.classList.remove("active");
        const m = i.querySelector(".share-menu");
        if (m) m.style.display = "none";
      });

      const isActive = icon.classList.toggle("active");

      if (window.innerWidth <= 576) {
        // On mobile: use class to slide it in
        if (isActive) {
          articleCard.classList.add("show-share");
          if (menu) menu.style.display = "flex";
        } else {
          articleCard.classList.remove("show-share");
          if (menu) menu.style.display = "none";
        }
      } else {
        if (menu) menu.style.display = isActive ? "flex" : "none";
      }
    });
  });

  // Click outside closes all
  document.addEventListener("click", () => {
    document.querySelectorAll(".article-card").forEach((card) => {
      card.classList.remove("show-share");
    });
    document.querySelectorAll(".share-icon").forEach((icon) => {
      icon.classList.remove("active");
      const menu = icon.querySelector(".share-menu");
      if (menu) menu.style.display = "none";
    });
  });
});
