import { redisClient } from "../utils/redis.js";

const checkRedis = async(req, res, next) =>{
  const { checkKey } = req.body;
  
  const data = await redisClient.GET(checkKey);
  if(data){
    return res.status(200).json({
        success:true,
        message:"Data from Redis database",
        data:JSON.parse(data)
    })
  }
  next();
}


export default checkRedis