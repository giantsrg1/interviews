angular.module('xaviar.news.services', [])

    .factory('newsFactory', ['$resource', function($resource) {
        return $resource('/articles/:id', {id: '@id'}, {
            get: {
                method: 'GET',
                isArray: true
            },
            add: {
                method: 'POST',
                isArray: false
            },
            delete: {
                method: 'DELETE',
                isArray: false
            },
            update: {
                url: '/articles/edit',
                method: 'POST',
                isArray: false
            }
        });
    }])

    .filter('safeHtml', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);