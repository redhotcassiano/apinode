import Product from './../schema/Product'

export default (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(()=>{res.status(204).end()})
        .catch((err)=>{
            res.status(500).json({
                status: false,
                data: {}
            })
        })
}