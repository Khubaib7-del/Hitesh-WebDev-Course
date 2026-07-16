import dotenv from "dotenv";
import app from './app.js';
import connectDB from "./db/index.js";
// you can access any variable from .env file using process.env.VARIABLE_NAME
// configuring dotenv
dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
    .then(() => {

        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`)
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error",err)
    })