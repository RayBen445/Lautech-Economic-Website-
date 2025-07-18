// js/auth-protect.js

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Check if user is authenticated
  const matric = localStorage.getItem("matric");
  const matricDisplay = document.getElementById("studentMatric");

  if (!matric) {
    alert("🚫 You must log in first.");
    window.location.href = "login.html";
    return;
  }

  // ✅ Display matric number if element is present
  if (matricDisplay) {
    matricDisplay.textContent = matric;
  }

  // ✅ Profile image elements
  const uploadInput = document.getElementById("uploadImage");
  const profileImage = document.getElementById("profileImage");

  // ✅ Handle profile image upload
  if (uploadInput && profileImage) {
    uploadInput.addEventListener("change", () => {
      const file = uploadInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result;
          localStorage.setItem("profileImage", base64Image);
          profileImage.src = base64Image;
        };
        reader.readAsDataURL(file);
      }
    });

    // ✅ Load saved profile image on page load
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      profileImage.src = savedImage;
    }
  }
});

// 🔓 Logout function
function logout() {
  localStorage.removeItem("matric");
  localStorage.removeItem("profileImage");
  window.location.href = "login.html";
          }
