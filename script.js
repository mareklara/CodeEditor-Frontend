document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Background Grid
  const gridContainer = document.getElementById("grid-container");
  const gridSize = 20; // Adjust for grid size

  if (gridContainer) {
    for (let i = 0; i < gridContainer.offsetWidth / gridSize; i++) {
      for (let j = 0; j < gridContainer.offsetHeight / gridSize; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${gridSize}px`;
        square.style.height = `${gridSize}px`;
        gridContainer.appendChild(square);
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-background");

  if (gridContainer) {
    for (let i = 0; i < 64; i++) {
      // Create 64 squares (8x8)
      const square = document.createElement("div");
      gridContainer.appendChild(square);
    }
  }
});
