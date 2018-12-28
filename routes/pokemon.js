var express = require('express');
var router = express.Router();
var db = require('../models');


// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll()
  .then(function(foundPokemon){
  	res.render('../views/results', { pokemons: foundPokemon })
  })
  .catch(function(error){
  	console.log('Error Message', error);
  	res.send('Error, check your logs');
  })
});


// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  db.pokemon.create({
  	name: req.body.name
  })
  .then(function(data){
  	console.log(req.body.name, ' has been added to your favorites');
  })
  .catch(function(error){
	console.log('There\'s been an error', error);
  })
  res.send(req.body.name, ' has been added to your favorites');
});

module.exports = router;