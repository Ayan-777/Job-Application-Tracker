import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);
connectDB()


app.get('/', (req, res) => {
    res.send('working')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
})