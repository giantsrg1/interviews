//init models ====================
let Quote = require('../models/quote');

module.exports = function(app) {
    //add a new quote
    app.post('/quotes', (req, res) => {
        let Quote = new Quote(req.body);
        article.save((err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.send('Created');
            }
        });
    });
}