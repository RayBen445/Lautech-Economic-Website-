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
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typing-rotate");
  const messages = [
    "🎓 Welcome to LAUTECH Economics Department",
    "📚 Explore your dashboard and resources",
    "👨‍🏫 Meet your staff and course instructors",
    "📘 Check your course materials",
    "🧾 Stay up to date with announcements"
  ];

  let msgIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = messages[msgIndex];
    let displayText = current.slice(0, charIndex);
    el.textContent = displayText;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 40);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) msgIndex = (msgIndex + 1) % messages.length;
      setTimeout(type, 1000);
    }
  }

  if (el) type();
});
