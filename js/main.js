// js/main.js

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

// Carousel logic
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((s, i) => s.classList.toggle("active", i === current));
  current = (current + 1) % slides.length;
}
setInterval(showSlide, 5000);
