const Joke = require('../models/jokes.model');

//to Create a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Sorry champ, I can't make that joke happen", error: err}));
}

//To Read all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}


//to Read a single joke
module.exports.findOne = (req, res) => {
    Joke.findOne({_id : req.params.id})
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({message: "It ain't here, big dog!", error:err}));
}


//to Read a random joke
module.exports.findRandomJoke = (req, res) => {
    Joke.countDocuments().exec((error, count) => {
        const random = Math.floor(Math.random() * count); //establishes a random set of numbers the length of the id number
        Joke.findOne()
            .skip(random) //uses the defined variable, but skips over it in the code process
            .exec((error, randomJoke) => //if error, show error.      |      if no error, display joke
            error ? res.json({ message: 'SOMETHING WENT WRONG!', error: error }) : res.json({ joke: randomJoke })
        );
    });
};




//to Update a joke
module.exports.updateOne = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updateJoke => res.json({ joke: updateJoke}))
        .catch(err => res.json({message: "Well, looks like i can't update that one. Something went wrong!", error: err}));
}


//to Delete a joke
module.exports.deleteTheJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke => res.json({ joke: deletedJoke}))
        .catch(err => res.json({message: "Too good to delete... Something went wrong buddy!", error: err}))
}