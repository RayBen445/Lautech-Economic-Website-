
const validMatricNumbers = ["2024013417", "2023011476"]; // Truncated
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("matricNumber").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (validMatricNumbers.includes(input)) {
    sessionStorage.setItem("authenticated", "true");
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Invalid matric number.";
  }
});
