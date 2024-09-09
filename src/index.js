import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { redisClient } from "./utils/redis.js";
import orderRouter from "./routes/redis.routes.js";
dotenv.config();


const port = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/api/v1/redis", orderRouter)




redisClient.on('connect', ()=>{
    console.log("Connected to Redis Successfully")
}).connect()

app.listen(port, ()=>{
    console.log(`App is listening at the port: ${port}`);
})