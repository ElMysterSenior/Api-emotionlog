const Emotion = require('../models/Emotion');

exports.getEmotionsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const emotions = await Emotion.findByUserId(userId);
    res.json(emotions);
  } catch (error) {
    console.error('Error fetching emotions:', error); // Error log
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createEmotion = async (req, res) => {
  try {
    const { usuarioId, fecha, hora, emocion, descripcion } = req.body;

    if (!usuarioId || usuarioId <= 0) {
      return res.status(400).json({ msg: 'Usuario ID es requerido y debe ser válido' });
    }

    const emotionId = await Emotion.create({
      usuarioId,
      fecha,
      hora,
      emocion,
      descripcion
    });

    res.status(201).json({ id: emotionId });
  } catch (error) {
    console.error('Error creating emotion:', error); // Error log
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getEmotionsByUserIdAndDateRange = async (req, res) => {
  try {
    const { userId, startDate, endDate } = req.params;
    const emotions = await Emotion.findByUserIdAndDateRange(userId, startDate, endDate);
    res.json(emotions);
  } catch (error) {
    console.error('Error fetching emotions:', error); // Error log
    res.status(500).json({ error: 'Server error' });
  }
};
