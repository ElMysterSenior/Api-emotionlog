// routes/videoRoutes.js
const express = require('express');
const { getAllVideos, createVideo } = require('../controllers/videoController');

const router = express.Router();

router.get('/', getAllVideos);
router.post('/', createVideo);

module.exports = router;
