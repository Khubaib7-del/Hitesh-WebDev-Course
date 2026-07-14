import express from 'express';
import cors from 'cors';
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to BaseCampy')
});
//Basic express configuration
//see app.use as middleware,
//it is used to configure express
//and add functionality to it.
app.use(express.json({limit: '16kb'}));
app.use (express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'));

//CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
}))


export default app;
