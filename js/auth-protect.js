// js/auth-protect.js

document.addEventListener("DOMContentLoaded", () => {
  const matric = localStorage.getItem("matric");
  const matricDisplay = document.getElementById("studentMatric");

  if (!matric) {
    alert("You must log in first.");
    window.location.href = "login.html";
  } else {
    if (matricDisplay) {
      matricDisplay.textContent = matric;
    }
  }

  // Profile picture upload
  const upload = document.getElementById("uploadImage");
  const profileImage = document.getElementById("profileImage");

  if (upload && profileImage) {
    upload.addEventListener("change", () => {
      const file = upload.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem("profileImage", reader.result);
          profileImage.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    });

    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      profileImage.src = savedImage;
    }
  }
});

// Logout function
function logout() {
  localStorage.removeItem("matric");
  localStorage.removeItem("profileImage");
  window.location.href = "login.html";
  }
