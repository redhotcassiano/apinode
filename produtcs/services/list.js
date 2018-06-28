import Product from './../schema/Product'

export default (req, res) => {
    Product.find({})
        .then((products)=>{
            if(!products || !products.length){
                return res.status(404).json({
                    status: false,
                    data: []
                })
            }

            return res.status(200).json({
                status: true,
                data: products
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                status: false,
                data: []
            })
        })
}