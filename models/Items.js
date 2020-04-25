const mongoose = require('mongoose');

// MAIN MODELS FOR STOCK ITEMS 
const itemsSchema = mongoose.Schema({
    section: {
        type: String,
    },
    name: {
        type: String,
    },
    type: {
        type: String,
    },    
    description: {
        type: String,
    },
    vendor: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    cost: {
        type: Number,
    }
});

module.exports = mongoose.model('Item', itemsSchema);
