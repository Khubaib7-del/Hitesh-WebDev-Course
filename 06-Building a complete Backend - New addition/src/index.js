import dotenv from "dotenv";
import app from './app.js';
// you can access any variable from .env file using process.env.VARIABLE_NAME
// configuring dotenv
dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})