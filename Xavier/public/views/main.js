angular.module('xaviar', [
        //third party modules
        'ui.router',
        'ngResource',

        //app modules
        'xaviar.admin',
        'xaviar.news',
        'xaviar.quote'
    ])
    //create states for SPA arch.
    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        let states = [{
            name: 'main',
            url: '/',
            templateUrl: 'views/main.html'
        }, {
            name: 'news',
            url: '/news',
            controller: 'newsController as newsCtrl',
            templateUrl: 'views/news/news.html'
        }, {
            name: 'quote',
            url: '/quote',
            controller: 'quoteController as quoteCtrl',
            templateUrl: 'views/quote/quote.html'
        }, {
            name: 'admin',
            url: '/admin',
            controller: 'adminController as adminCtrl',
            templateUrl: 'views/admin/admin.html'
        }];
        states.forEach((state) => {
            $stateProvider.state(state);
        });
    });