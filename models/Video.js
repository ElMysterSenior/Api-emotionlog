// models/Video.js
const pool = require('../config/db');

const Video = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM videos');
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM videos WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (video) => {
    const { titulo, tecnica, descripcion, thumbnail, url } = video;
    const [result] = await pool.query('INSERT INTO videos (titulo, tecnica, descripcion, thumbnail, url) VALUES (?, ?, ?, ?, ?)', [titulo, tecnica, descripcion, thumbnail, url]);
    return result.insertId;
  }
};

module.exports = Video;
