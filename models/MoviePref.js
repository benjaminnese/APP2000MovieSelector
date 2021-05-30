/*
* Forfatter: Johannes Halvorsen 
*/

const mongoose = require('mongoose');
const {Schema} = mongoose;

const moviePrefSchema = new Schema({
  userId: {type: String, required:true, unique:false},
  gendres: [],
  _user : {type: Schema.Types.ObjectId, ref :'User'} 
}, {       //_ betyr relasjonsfelt
  timestamps: true,
});

const MoviePref = mongoose.model('MoviePref', moviePrefSchema);
module.exports = MoviePref;
