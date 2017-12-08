angular.module('xaviar.admin', [
        'xaviar.news.services'
    ])

    .controller('adminController', ['newsFactory', '$scope', function(newsFactory, $scope) {
        let self = this;
        self.isAdmin = false;
        self.article = {};
        self.articles = [];
        self.isEditing = false;
        self.editHeader = '';

        self.checkPassword = function() {
            self.isAdmin = self.password == 'connect123';
            if (!self.isAdmin) {
                alert('Incorrect password!');
            } else {
                self.articleReset();
            }
        }

        self.articleFormEdit = function(index) {
            if (index >= 0) {
                self.article = angular.copy(self.articles[index]);
                self.editHeader = 'Edit: ' + self.article.title;
            } else {
                self.article = {};
                self.editHeader = 'New Article';
            }
            self.isEditing = true;
        }

        self.articleReset = function() {
            self.isEditing = false;
            self.article = {};
            self.editHeader = '';
            newsFactory.get().$promise.then(function(articles) {
                self.articles = articles;
            });
        }

        self.articleDelete= function(id) {
            let areYouSure = confirm('Are you sure you want to delete this?');
            if(areYouSure){
                newsFactory.delete({id: id}).$promise.then(function() {
                    alert('Article Deleted!');
                    self.articleReset();
                });
            }
        }

        self.submitArticle = function() {
            if (self.article._id) {
                newsFactory.update({}, self.article).$promise.then(function() {
                    alert('Article Updated!');
                    self.articleReset();
                });
            } else {
                newsFactory.add({}, self.article).$promise.then(function() {
                    alert('Article Created!');
                    self.articleReset();
                });
            }

        }        
    }]);