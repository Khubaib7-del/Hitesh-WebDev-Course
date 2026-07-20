import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

//Basic express configuration
//see app.use as middleware,
//it is used to configure express
//and add functionality to it.
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'));
app.use(cookieParser());


//CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
}))

//creating cutom routing layers
import healthCheckRouter from './routes/healthcheck.routes.js';
import authRouter from './routes/auth.routes.js';

app.use('/api/v1/healthcheck', healthCheckRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Welcome to BaseCampy')
});
export default app;
