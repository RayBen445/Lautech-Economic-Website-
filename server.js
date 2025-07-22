const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// 🔐 Middleware
const authProtect = require('./middleware/auth-protect');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔧 Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 📁 Ensure uploads folder exists
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// 🔧 Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// 🧠 In-memory user store
const users = {};

// ✅ Login / Register endpoint
app.post('/api/login', upload.single('profilePic'), (req, res) => {
  const { matric, fullName, email } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : "";

  if (!matric || !fullName) {
    return res.status(400).json({ message: "❌ Matric number and full name are required" });
  }

  // Save user
  users[matric] = {
    fullName,
    email: email || "",
    image
  };

  return res.status(200).json({
    message: "✅ Login successful",
    user: users[matric]
  });
});

// 👤 Get user by matric number (protected)
app.get('/api/user/:matric', authProtect, (req, res) => {
  const matric = req.params.matric;

  if (users[matric]) {
    return res.json(users[matric]);
  } else {
    return res.status(404).json({ message: "❌ User not found" });
  }
});

// 🟢 Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
