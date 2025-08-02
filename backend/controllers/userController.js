// figma/backend/controllers/userController.js

const { getUsers } = require('../controllers/userController');

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.analyseResume = (req, res) => {
  const resumeFile = req.file;
  const jobDescription = req.body.jobDescription;

  if (!resumeFile || !jobDescription) {
    return res.status(400).json({ error: "Resume and job description required." });
  }

  // Dummy analysis logic (replace with real AI/ML logic)
  const analysis = `Received resume: ${resumeFile.originalname}. Job description length: ${jobDescription.length} characters.`;

  res.json({ analysis });
};