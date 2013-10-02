var App = App || {};

(function () {

	'use strict';

	var results = [{
		name: 'Team #1',
		score: ['10', '12', '8']
	}, 
	{
		name: 'Team #2',
		score: ['5', '15', '4']
	},
	{
		name: 'Team #3',
		score: ['10', '6', '13']
	}];

	var ResultsController = {
		index: function(){
			App.Template.render('page-results', {
				results: results
			});
		}
	};

	App.ResultsController = ResultsController;

})();