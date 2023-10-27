const express = require ('express')
const router = express.Router()

const {getAllProductsStatic, getAllProducts} = require('../controllers/products')

router.route('/').get( (req, res) =>  {
    throw new Error('testing async errors')
    res.status(200).json({msg:'products testing route'})
})
router.route('/static').get((req, res) =>  {
    throw new Error('testing async errors')
    res.status(200).json({msg:'products route'})
})

module.exports = router
