import { protect } from "../middleware/authMiddleware.js";
import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, createProduct);
router.get("/:id", getProductById);

export default router;