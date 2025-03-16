import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        brand: {
            type: String,
            required: [true, "Brand is required"],
        },
        stock: {
            type: Number,
            required: [true, "Stock is required"],
        },
        image: {
            type: String,
            required: [true, "Image is required"],
        },
        rating: {
            type: Number,
            required: [true, "Rating is required"],
        },
        numberOfReviews: {
            type: Number,
            required: [true, "NumberOfReviews is required"],
        },
        discount: {
            type: Number,
            required: [true, "Discount is required"],
        },
        isFeatured: {
            type: Boolean,
            required: [true, "IsFeatured is required"],
        },
        seller: {
            type: String,
            required: [true, "Seller is required"],
        },
    },
    { timestamps: true }
);

export const product = mongoose.model("product", productSchema);
