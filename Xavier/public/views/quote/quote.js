angular.module('xaviar.quote', [
		'xaviar.quote.services'
	])

    .controller('quoteController', ['JETMODELS', 'quoteFactory', function(JETMODELS, quoteFactory) {
        let self = this;
        self.title = 'COMING SOON!';
        self.jetModels = JETMODELS;
        self.quote = {};

        self.sendQuote = function(){
        	quoteFactory.sendQuote(self.quote).$promise.then(function(msg) {
                console.log(msg);
            });
        }
    }]);