import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()
app.use(express.json());

app.get('/', (req, res) => {
    res.send('working')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
})