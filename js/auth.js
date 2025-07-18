// Handle login
if (window.location.pathname.includes("login.html")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const matric = document.getElementById("matric").value.trim();
    const message = document.getElementById("loginMessage");

    if (validMatricNumbers.includes(matric)) {
      sessionStorage.setItem("matricNumber", matric);
      window.location.href = "home.html";
    } else {
      message.textContent = "Invalid Matric Number";
    }
  });
}

// Protect all pages except login
if (!window.location.pathname.includes("login.html")) {
  const stored = sessionStorage.getItem("matricNumber");
  if (!stored || !validMatricNumbers.includes(stored)) {
    window.location.href = "login.html";
  }
      }
