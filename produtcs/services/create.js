import Produtc from './../schema/Product'

export default (req, res) => {
    let produtc = new Produtc(req.body)

    produtc.save().then((result)=>{
        if(!result){
            return res.status(404).json({
                status: 401,
                data: {}
            })
        }

        return res.status(201).json({
            status: true,
            data: result
        })

    }).catch((err) => {
        res.status(500).json({status: false, data: {}})
    })
}