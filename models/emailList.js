const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const emailListSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
    type: String,
    trim: true
    }
});



module.exports = mongoose.model('EmailList', emailListSchema);

