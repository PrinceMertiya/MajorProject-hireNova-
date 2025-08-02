// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/users', userRoutes);

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(process.env.PORT || 5000, () => {
//       console.log('Server running on port', process.env.PORT || 5000);
//     });
//   })
//   .catch(err => console.error(err));


// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import userRoutes from './routes/userRoutes.js'; // ensure .js if using ES modules

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Multer setup for resume upload (in memory)
const upload = multer({ storage: multer.memoryStorage() });

// Analyse endpoint
app.post('/api/analyse', upload.single('resume'), async (req, res) => {
  try {
    const resumeFile = req.file;
    const { jobDescription } = req.body;

    if (!resumeFile || !jobDescription) {
      return res.status(400).json({ error: 'Resume file and job description are required.' });
    }

    console.log('Received Resume:', resumeFile.originalname);
    console.log('Received Job Description:', jobDescription);

    // === Placeholder for real AI/resume parsing logic ===
    // Example of how you might extract text from a PDF resume:
    // import pdf from 'pdf-parse';
    // const data = await pdf(resumeFile.buffer);
    // const resumeText = data.text;

    // Then send resumeText + jobDescription to your AI service (e.g., OpenAI) and get back analysis.

    // For now, mock result:
    const mockAnalysisResult = `This is a mock analysis. The resume '${resumeFile.originalname}' seems to be a good fit for the provided job description. Key skills matched: React, Node.js, and API design. Suggestion: Emphasize your experience with cloud services.`;

    return res.status(200).json({ analysis: mockAnalysisResult });
  } catch (err) {
    console.error('Error in /api/analyse:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

// Health check / fallback
app.get('/', (req, res) => {
  res.send('API is up and running.');
});

// MongoDB connect and server start
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Note: depending on mongoose version, these options may be defaults or deprecated
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
