/* Henter inn mongoose, og Schema fra mongoose.
* Lager en ny instans av Schema fra mongoose, som knyttes til const userSchema.
* Vi forteller deretter mongoose at vi vil lage en ny collection, kalt 'users',
* og får oppsettet definert i userSchema.
*/

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String, //lage vennerelasjon her, en array med users inni users
    bilde: String
});

mongoose.model('users', userSchema);