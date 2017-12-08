//init models ====================
let Article = require('../models/article');

module.exports = function(app) {
    //get all articles
    app.get('/articles', (req, res) => {
        Article.find({}, null, { sort: '-date' }, function(err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                res.send(data);
            }
        });
    });

    //add an article
    app.post('/articles', (req, res) => {
        let article = new Article(req.body);
        article.save((err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.send('Created');
            }
        });

    });

    //update submit
    app.post('/articles/edit', (req, res) => {
        let article = req.body;
        let query = { _id: req.body._id };

        Article.update(query, article, (err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.send('Updated');
            }
        });
    });

    //delete article
    app.delete('/articles/:id', (req, res) => {
        let query = {_id: req.params.id};
        Article.remove(query, (err) => {
            if(err){
                console.log(err);
            }
            res.send('Deleted');
        })
    });
}