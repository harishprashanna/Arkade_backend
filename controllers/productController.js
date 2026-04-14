import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

const getProducts = asyncHandler(async (req, res) => {
  const { category, search } = req.query;

  const filter = {};

  if (category) {
    filter.category = category;
  }

  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  const products = await Product.find(filter).sort({ createdAt: -1 });
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, countInStock, emoji, badge } = req.body;

 if (!name || !description || !price || !category) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    countInStock,
    emoji,
    badge,
  });

  res.status(201).json(product);
});

export { getProducts, getProductById, createProduct };