const mongoose = require('mongoose');

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

mongoose.model('Item', itemsSchema);
