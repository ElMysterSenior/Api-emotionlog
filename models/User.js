// models/User.js
const pool = require('../config/db');

const User = {
  findByEmail: async (email) => {
    try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching user by email:', error);
      return null;
    }
  },
  create: async (user) => {
    const { nombre, email, password } = user;
    try {
      const [result] = await pool.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [nombre, email, password]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
};

module.exports = User;
