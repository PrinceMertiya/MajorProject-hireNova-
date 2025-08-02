
const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();
const multer = require('multer');
const { analyseResume } = require('../controllers/userController');

const upload = multer({ dest: 'uploads/' });

router.get('/', getUsers);
router.post('/analyse', upload.single('resume'), analyseResume);

module.exports = router;