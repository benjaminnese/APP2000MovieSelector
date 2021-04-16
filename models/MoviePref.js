const mongoose = require('mongoose');
const {Schema} = mongoose;

const moviePrefSchema = new Schema({
  userId: {type: String, required:true, unique:false},
  gendres: []
}, {
  timestamps: true,
});

const MoviePref = mongoose.model('MoviePref', moviePrefSchema);
module.exports = MoviePref;
