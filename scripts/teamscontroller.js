var App = App || {};

(function () {

	'use strict';

	var teams = [{
		name: 'Team #1',
		players: ['Rob', 'Dan', 'Peter']
	}, 
	{
		name: 'Team #2',
		players: ['Pete', 'Harry', 'Robin']
	},
	{
		name: 'Team #3',
		players: ['Robert', 'Wesley', 'Jon']
	}];

	var TeamsController = {
		index: function() {
			App.Template.render('page-teams', {
				teams: teams
			});
		}
	};

	App.TeamsController = TeamsController;

})();