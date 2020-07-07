const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
  },{
    collection: 'users'
  });
  
  const user = mongoose.model('User', userSchema);
  
  module.exports = user;;