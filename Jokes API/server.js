const express = require("express");
const app = express();
const port = 8000

require("./server/config/mongoose.config");

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
const allTheRoutes = require("./server/routes/jokes.routes")
allTheRoutes(app);

app.listen(port, ()=> console.log(`I'm running thhuuuuper fast on ${port}`))