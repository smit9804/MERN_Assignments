const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Estblished a connection with the database'))
    .catch(err => console.log('Database aint connected', err));