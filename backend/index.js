const express = require('express');
const app = express();
const connectDB = require('./db');
const cors = require('cors');

app.use(cors());
connectDB();

const PORT = process.env.PORT || 5000;
//Middleware to parse body
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'));

//defining the routes
app.use('/api/todos', require('./Routes/api/todos'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));