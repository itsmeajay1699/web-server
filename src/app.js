

import express from 'express'
import { connectDB } from '../config/db.js';
import { redisClient } from '../config/redis.js';
import { indexRouter } from './routes/index.route.js';
import dotenv from "dotenv"

dotenv.config();

const app = express();




// db connection
await connectDB();

app.use(express.json());

// routes setup
app.use('/api', indexRouter);


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.get('/', (req, res) => {
    res.send('Hello World from Docker!');
});

export default app;