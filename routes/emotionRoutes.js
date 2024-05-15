const express = require('express');
const { getEmotionsByUserId, createEmotion, getEmotionsByUserIdAndDateRange } = require('../controllers/emotionController');

const router = express.Router();

router.get('/user/:userId', getEmotionsByUserId);
router.post('/', createEmotion);
router.get('/user/:userId/dates/:startDate/:endDate', getEmotionsByUserIdAndDateRange);

module.exports = router;
