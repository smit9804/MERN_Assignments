const Joke = require("../controllers/jokes.controller");

module.exports = app => {
    //returns all jokes!
    app.get("/api/jokes/", Joke.findAllJokes);
    //return a certain joke!
    app.get("/api/jokes/:id", Joke.findOne),
    //returns a random joke!
    app.get("/api/jokes/random", Joke.findRandomJoke);
    //creates a new joke!
    app.post("/api/jokes/new", Joke.createJoke);
    //updates a current joke!
    app.put("/api/jokes/update/:id", Joke.updateOne);
    //deletes a joke!
    app.delete("/api/jokes/:id", Joke.deleteTheJoke);
}
