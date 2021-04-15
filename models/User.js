/* Henter inn mongoose, og Schema fra mongoose.
* Lager en ny instans av Schema fra mongoose, som knyttes til const userSchema.
* Vi forteller deretter mongoose at vi vil lage en ny collection, kalt 'users',
* og får oppsettet definert i userSchema.
*/


const mongoose = require('mongoose');
const {Schema} = mongoose;
const moviePrefSchema = require('./MoviePref');

console.log(moviePrefSchema);

const userSchema = new Schema({
  googleId: {type: String, require: true},
  name: String, // lage vennerelasjon her, en array med users inni users
  bilde: String,
  epost: String,
  hei: String,
  pref: {type: Schema.Types.ObjectId, ref: 'moviePrefSchema'}, // henter film preferansen
});

const users = mongoose.model('users', userSchema);
module.exports = users;
