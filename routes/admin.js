import express from "express";
import {
  Login,
  createShop,
  getShop,
  deleteShop,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/login", Login);

// create shop

router.post("/shop/create", createShop);

// get shops
router.get("/shop", getShop);

// delete shop
router.delete("/shop/delete/:id", deleteShop);
export default router;
