const allowedMatricNumbers = [
  "2024003476", "2024013417", "2023011476", "2024003355"
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const error = document.getElementById("registerError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const matric = document.getElementById("matricNumber").value.trim();

    if (!allowedMatricNumbers.includes(matric)) {
      error.textContent = "❌ Matric Number not found. Access denied.";
      return;
    }
    if (fullName.split(" ").length < 2) {
      error.textContent = "❌ Please enter full name in the correct format.";
      return;
    }
    localStorage.setItem("matric", matric);
    localStorage.setItem("fullName", fullName);
    alert("✅ Registration successful!");
    window.location.href = "home.html";
  });
});
