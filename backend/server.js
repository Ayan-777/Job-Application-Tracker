import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('working')
})

app.listen(PORT,()=>{
console.log(`Server running at http://localhost:${PORT}`);
})