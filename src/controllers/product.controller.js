import { product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            brand,
            stock,
            image,
            rating,
            numberOfReviews,
            discount,
            isFeatured,
            seller,
        } = req.body;

        console.log(req.body);
        

        if (
            !name ||
            !description ||
            !price ||
            !category ||
            !brand ||
            !stock ||
            !image ||
            !rating ||
            !numberOfReviews ||
            !discount ||
            !isFeatured ||
            !seller
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const newProduct = await product.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Product created",
            newProduct,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};