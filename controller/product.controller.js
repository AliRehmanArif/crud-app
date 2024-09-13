import Product from "./Models/products.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
    
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          res.status(404).json({ message: "Product not  found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


export default {
    getProducts,
    getSingleProducts,
    addProduct,
    updateProduct,
    deleteProduct
}