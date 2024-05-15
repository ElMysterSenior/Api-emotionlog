const pool = require('../config/db');

const Emotion = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM emociones');
    return rows;
  },
  findByUserId: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM emociones WHERE usuarioId = ?', [userId]);
    return rows;
  },
  findByUserIdAndDateRange: async (userId, startDate, endDate) => {
    const [rows] = await pool.query(
      'SELECT * FROM emociones WHERE usuarioId = ? AND fecha BETWEEN ? AND ?',
      [userId, startDate, endDate]
    );
    return rows;
  },
  create: async (emotion) => {
    const { usuarioId, fecha, hora, emocion, descripcion } = emotion;
    const [result] = await pool.query(
      'INSERT INTO emociones (usuarioId, fecha, hora, emocion, descripcion) VALUES (?, ?, ?, ?, ?)',
      [usuarioId, fecha, hora, emocion, descripcion]
    );
    return result.insertId;
  }
};

module.exports = Emotion;
