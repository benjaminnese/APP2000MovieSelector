const mongoose = require('mongoose');
const {Schema} = mongoose;



const userSchema = new Schema({
    googleId: String,
    name: String //lage vennerelasjon her, en array med users inni users
});

mongoose.model('users', userSchema); //vi forteller moongose vi vil lage en ny collection 