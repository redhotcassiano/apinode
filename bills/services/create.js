import Bill from './../schema/Bill'

export default (req, res) => {
    let bill = new Bill(req.body)

    bill.save().then((result)=>{
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