angular.module('xaviar.news', [
        'xaviar.news.services'
    ])

    .controller('newsController', ['newsFactory', function(newsFactory) {
        let self = this;
        self.articles = [];
        newsFactory.get().$promise.then(function(articles){
        	self.articles = articles;
        });
    }]);