const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const upLoadSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
    },
  date: {
      type: String,
      trim: true
    },
  time: {
      type: String,
      trim: true
    },
  description: {
      type: String,
      trim: true
    }
});



module.exports = mongoose.model('Upload', upLoadSchema);

