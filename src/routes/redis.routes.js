import { getOrdersControllers, setOrdersWithTTLControllers, getAndSetDataControllers } from "../controllers/redis.controllers.js";
import checkRedis from "../middlewares/redis.middleware.js";
import { Router } from "express";
const orderRouter = Router();

//This Route gets the products of the user
orderRouter.route("/products").get(getOrdersControllers);

//This Route sets the products with TTL in the Redis Database
orderRouter.route("/set/products").post(setOrdersWithTTLControllers);

//This Route gets and sets the products of the user in Redis
orderRouter.route("/set/get/products").get(checkRedis, getAndSetDataControllers);  


export default orderRouter
