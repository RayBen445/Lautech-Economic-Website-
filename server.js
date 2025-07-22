const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

const users = {}; // in-memory for now

// ✅ Add this test route
app.get("/", (req, res) => {
  res.send("✅ Backend API is running");
});

// ✅ Main login/register route
app.post('/api/login', upload.single('profilePic'), (req, res) => {
  const { matric, fullName, email } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : "";

  if (!matric || !fullName) {
    return res.status(400).json({ message: "Matric number and full name are required" });
  }

  users[matric] = { fullName, email: email || "", image };

  return res.status(200).json({
    message: "✅ Login successful",
    user: users[matric]
  });
});

// ✅ Check user info
app.get('/api/user/:matric', (req, res) => {
  const user = users[req.params.matric];
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ message: "❌ User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
