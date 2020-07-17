const products = require('../data/products');

const productsCount = products.length;

const list = (req,res) => {
    return res.json(products)
}
;
const show =  (req, res) => {
    const id = req.params.productId
    const foundProduct = products.find(product => product._id === Number(id));
    
    res.json(foundProduct);
};

const create = (req, res) => {
    console.log(req.body);

    const newProduct = {
        _id: productsCount + 1,
        ...req.body
    };

    products.push(newProduct);
    res.json(newProduct)
};

module.exports = {
    list, 
    show, 
    create
}