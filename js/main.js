<!-- js/main.js -->
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
  // Optional: Add image carousel switching
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    slides.forEach(s => s.classList.remove('active'));
    slides[index = (index + 1) % slides.length].classList.add('active');
  }, 4000);
});
