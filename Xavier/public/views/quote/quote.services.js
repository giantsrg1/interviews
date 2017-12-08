angular.module('xaviar.quote.services', [])

    .value('JETMODELS', ['Gulfstream G650','Cessna A-37', 'Dragonfly', 'Cessna Citation Encore'])

    .factory('quoteFactory', ['$resource', '$http', function($resource, $http) {
        return $resource('https://j950rrlta9.execute-api.us-east-2.amazonaws.com/v1/ArgoChallenge', null, {
            sendQuote: {
                method: 'POST',
                headers: {                    
                    'X-Auth-Token': 'L0Q3GvXCwB9jVSmvaJbw5augw4xHCvMy4Egqim2p',
                    'content-type': 'application/json'
                }
            }
        });
    }]);