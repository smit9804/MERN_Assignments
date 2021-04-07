const Product = require('../models/products.models');



//to Create a new Product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: "Sorry champ, I can't make that product happen", error: err}));
}

//to Read all Products
module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}


//to Read a single Product
module.exports.findOne = (req, res) => {
    Product.findOne({_id : req.params.id})
        .then(oneProduct => res.json({ product: oneProduct}))
        .catch(err => res.json({message: "It ain't here, big dog!", error:err}));
}

//to Update a Product
module.exports.updateOne = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateProduct => res.json({ product: updateProduct}))
        .catch(err => res.json({message: "Well, looks like i can't update that one. Something went wrong!", error: err}));
}


//to Delete a Product
module.exports.deleteTheProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({ product: deletedProduct}))
        .catch(err => res.json({message: "Too good to delete... Something went wrong buddy!", error: err}))
}