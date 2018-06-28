import mongoose from 'mongoose'

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Product', Product) 