import { redisClient } from "../utils/redis.js"

const getOrdersControllers = async(req,res)=>{
     
    const data = {
        title: "MacBook",
        price : 10000.00,
        company: "Apple Inc."
    }
   
    const setKey = 'product';
    const setValue = JSON.stringify(data);

    await redisClient.set(setKey, setValue);

    return res.status(200).json({
        success:true,
        message:"This is the Backend Data",
        data:data
    });
}

const getSingleOrderController = async(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"This Route is working"
    });
}


export {
  getOrdersControllers,
  getSingleOrderController
}