const Product = require('../controllers/products.controller');

module.exports = app => {
    //return all products
    app.get("/api/products/", Product.findAllProducts);
    // return one product
    app.get("/api/products/:id", Product.findOne);
    //create a new product
    app.post("/api/products/new", Product.createProduct);
    //update a product
    app.put("/api/products/update/:id", Product.updateOne);
    //delete a product
    app.delete("/api/products/:id", Product.deleteTheProduct);
}