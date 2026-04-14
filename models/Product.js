import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be positive"],
    },
    category: {
      type: String,
      index: true,
      required: [true, "Category is required"],
      enum: ["apparel", "footwear", "accessories", "gear"],
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    emoji: {
      type: String,
      default: "📦",
    },
    badge: {
      type: String,
      enum: ["NEW", "HOT", null],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;