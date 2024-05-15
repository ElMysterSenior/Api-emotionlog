// app.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const emotionRoutes = require('./routes/emotionRoutes');
const videoRoutes = require('./routes/videoRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet()); // Añade seguridad HTTP headers
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/emotions', emotionRoutes);
app.use('/api/videos', videoRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
