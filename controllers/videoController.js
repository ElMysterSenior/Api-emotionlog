// controllers/videoController.js
const Video = require('../models/Video');

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const videoId = await Video.create(req.body);
    res.status(201).json({ id: videoId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
