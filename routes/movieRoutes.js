// eslint-disable-next-line new-cap
const router = require('express').Router();
const MoviePref = require('../models/MoviePref');

router.route('/').get((req, res) => {
  MoviePref.find()
      .then((moviePref) => res.json(moviePref))
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const gendres = req.body.gendres;
  const date = Date.parse(req.body.date);

  const newMoviePref = new MoviePref({
    userId,
    gendres,
    date,
  });
 // TODO FORTSETT
  newMoviePref.save()
      .then(() => res.json('Vellykket'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  MoviePref.findOne(req.userId) //Så kan vi søke med userId istendenfor ID fra mongoDB
      .then((moviePref) => res.json(moviePref))
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  MoviePref. MoviePref.findOneAndDelete(req.userId)
      .then(() => res.json('MoviePref deleted.'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  MoviePref.findOne(req.userId)
      .then((moviePref) => {
        moviePref.gendres = req.body.gendres;
        moviePref.save()
            .then(() => res.json('MoviePref updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
      })
      .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router; // ekspotere router må gjøres på alle
