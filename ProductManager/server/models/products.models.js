const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: [true, "Name is required"]
    },
    price:
    {
        type: String,
        required: [true, "Please tell me how much!"]
    },
    description:
    {
        type: String,
        required: [true, "Please type something to describe this product!"]
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;