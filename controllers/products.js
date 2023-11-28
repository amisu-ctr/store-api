const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({featured: true})
    res.status(200).json({products})
}
const getAllProducts = async (req, res) => {
    throw new Error('testing async errors')
    res.status(200).json({msg: 'products route'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}