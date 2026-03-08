import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    primary_category: String,

    sub_category: String,

    seo_tags: [String],

    sustainability_filters: [String],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Product = mongoose.model("Product", ProductSchema);