const mongoose = require('mongoose');

const oderSchema = new mongoose.Schema({
    product: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
    discount: { type: Number, required: true, min: 0 },
    totalPrice: { type: Number, required: true, min: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Order', oderSchema);