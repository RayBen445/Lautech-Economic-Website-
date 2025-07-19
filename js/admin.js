// js/admin.js

// ✅ Only allow access to President's matric number const adminMatric = "2024003476";

// ✅ Check user access on load document.addEventListener("DOMContentLoaded", () => { const currentMatric = localStorage.getItem("matric");

if (currentMatric !== adminMatric) { alert("🚫 You are not authorized to access this page."); window.location.href = "home.html"; return; }

// ✅ Load saved admin data loadAdminEntries();

// ✅ Handle form submission document.getElementById("adminForm").addEventListener("submit", (e) => { e.preventDefault();

const role = document.getElementById("role").value;
const name = document.getElementById("name").value.trim();
const whatsapp = document.getElementById("whatsapp").value.trim();

if (!name || !whatsapp) {
  alert("Please fill all fields.");
  return;
}

const entry = { role, name, whatsapp };
const entries = JSON.parse(localStorage.getItem("adminEntries") || "[]");
entries.push(entry);
localStorage.setItem("adminEntries", JSON.stringify(entries));

// Reset form and update display
document.getElementById("adminForm").reset();
loadAdminEntries();

}); });

// ✅ Display saved entries function loadAdminEntries() { const list = document.getElementById("adminList"); list.innerHTML = ""; const entries = JSON.parse(localStorage.getItem("adminEntries") || "[]");

if (entries.length === 0) { list.innerHTML = "<p>No entries yet.</p>"; return; }

entries.forEach(({ role, name, whatsapp }) => { const item = document.createElement("div"); item.className = "admin-entry"; item.innerHTML = <strong>${role}:</strong> ${name}<br> <a href="https://wa.me/${whatsapp}" target="_blank">Chat on WhatsApp</a>; list.appendChild(item); }); }

