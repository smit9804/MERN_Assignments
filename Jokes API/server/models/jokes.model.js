const mongoose = require ('mongoose');

const JokesSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;