document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("uploadImage");
  const profileImage = document.getElementById("profileImage");

  // Load saved profile image
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage && profileImage) {
    profileImage.src = savedImage;
  }

  // Handle image upload
  if (uploadInput && profileImage) {
    uploadInput.addEventListener("change", () => {
      const file = uploadInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result;
          localStorage.setItem("profileImage", base64);
          profileImage.src = base64;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
