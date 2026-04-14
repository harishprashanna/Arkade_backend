import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();
await connectDB();

const seedProducts = async () => {
  try {
    const count = await Product.countDocuments();

    if (count === 0) {
      await Product.insertMany(products);
      console.log("Products seeded successfully");
    } else {
      console.log("Products already exist, skipping seed");
    }

    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

seedProducts();