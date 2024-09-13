import mongoose from "mongoose";

// Define the schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter the product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: [true, "Please Enter the comment name"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model using the schema
const Product = mongoose.model("Product", ProductSchema);

// Export the model
export default Product;
