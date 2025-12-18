import express from "express";
import { createOrder } from "../controller/order.controller.js";

const router = express.Router();

router.post("/book", createOrder);

export default router;