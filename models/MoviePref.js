const mongoose = require('mongoose');
const {Schema} = mongoose;

const moviePrefSchema = new Schema({
  userId: String,
  gendres: [{
    name: String,
  },
  ],
}, {
  timestamps: true,
});

const MoviePref = mongoose.model('MoviePref', moviePrefSchema);
module.exports = MoviePref;
