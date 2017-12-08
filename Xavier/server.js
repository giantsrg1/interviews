//required packages ====================
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//load up database ====================
mongoose.connect('mongodb://localhost/xavier', {useMongoClient: true});
let db = mongoose.connection;

//check db
db.once('open', () => {
    console.log('connected to MongoDB');
})
db.on('error', (err) => {
    console.log(err);
})

//init app ====================
const app = express();
const port = process.env.PORT || 3000;

//body parser middleware ====================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

//routes ====================
//main route
app.get('/', (req, res) => {
    res.render('index');
});

//apiRoutes
require('./api/routes/articleRoutes')(app);
require('./api/routes/quoteRoutes')(app);


// Start server ====================
app.listen(port, () => {
    console.log('Server started on port ' + port + '...')
})