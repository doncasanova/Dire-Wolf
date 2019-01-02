const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const upLoadSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
    },
  password: {
      type: String,
      trim: true
    }
});



module.exports = mongoose.model('Upload', upLoadSchema);

