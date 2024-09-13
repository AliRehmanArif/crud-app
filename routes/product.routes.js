import express from "express";
// import Product from "./Models/products.model.js";
const router = express.Router()
import { getProducts, getSingleProducts, addProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';





router.get('/', getProducts)
router.get('/:id', getSingleProducts)
router.post('/', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router