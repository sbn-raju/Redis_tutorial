import { redisClient } from "../utils/redis.js"
import { products } from "../constants/index.constants.js";


const getOrdersControllers = async(req,res)=>{
    const { checkKey } = req.body;

    const data = await redisClient.get(checkKey);
    if(!data){
      return res.status(400).json({
        success:false,
        message:"Data is not present in Redis"
      })
    }else{
        return res.status(200).json({
            success:true,
            message:"This is the Backend Data",
            data:JSON.parse(data)
        });
    }
}


const setOrdersWithTTLControllers = async(req,res)=>{

    const setKey = 'products';
    const setData = JSON.stringify(products);

    try {
        const setQuery = await redisClient.setEx(setKey, 60, setData);
        if(setQuery == 'OK'){
            return res.status(200).json({
                success:true,
                message:"The data is set to Redis database with TTL",
                data:products
            });
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Error in setting data to Redis database with TTL",
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        });
    }
}


const getAndSetDataControllers = async(req,res)=>{
    const { checkKey } = req.body

    //This logic will be changed when the API is hitting database to fetch the products.
    //For Testing using predefined products
    const data = JSON.stringify(products);

    const setKey = checkKey;

    try {
        const setResponse = await redisClient.setEx(setKey, 60, data);
        if(setResponse == 'OK'){
            return res.status(200).json({
                success:true,
                message:"Data from Backend database",
                data:JSON.parse(data),
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Error in setting data to Redis database",
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        });
    }
}



export {
  getOrdersControllers,
  setOrdersWithTTLControllers,
  getAndSetDataControllers
}