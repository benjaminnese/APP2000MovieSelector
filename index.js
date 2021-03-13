// pw heroku :dgb@123456
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //rekkefølgen viktig, ettersom de laster inn nødvendigdata

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();


//Gjør data tilgjengelig for req.body
//Så hver gang en post/put div request vil bli kjørt gjennom JSON 
//konventeringen for riktig text format
app.use(bodyParser.json());


app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, //skal vare i 30 dager, er i ms
      keys: [keys.cookieKey] //hash cookie så ikke kan fakes?? usikker her
  })  
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build')); //hvis noe get request kommer inn vi ikke kjenner til, gå å sjekk i client/build
  
   //kjører det under hvis det over ikke blir gjort
  const path = require('path');
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Port fra heroku eller 5000 om lokalt
const PORT = process.env.PORT || 5000;
app.listen(PORT);
