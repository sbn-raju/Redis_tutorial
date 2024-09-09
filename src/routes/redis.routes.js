import { getOrdersControllers, getSingleOrderController } from "../controllers/redis.controllers.js";
import checkRedis from "../middlewares/redis.middleware.js";
import { Router } from "express";
const orderRouter = Router();

//This Route gets the orders of the user
orderRouter.route("/orders").get(checkRedis, getOrdersControllers);

//This Route gets the products of the store
orderRouter.route("/products").get(getSingleOrderController);


export default orderRouter
