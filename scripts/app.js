(function () {

	'use strict';

	var App = {
		
		renderPage: function(title, body) {
			App.Template.render('page-general', {
				title: title,
				body: body
			});
		},

		init: function() {

			routie({
				'/schedule': function() {
					App.renderPage('The Windmill Windup 2013 schedule', 'Know when your team has to play!');
				},
				'/teams': function() {
					App.TeamsController.index();
				},
				'/results': function() {
					App.ResultsController.index();
				},
				'/films': function() {
					App.FilmsController.index();
				},
				'/': function() {
					App.renderPage('The Windmill Windup 2013', 'This is the homepage.');
				},
				'*': function() {
					App.renderPage('404!', 'This page has not been found.');
				}
			});

		}
	};

	window.App = App;

	window.addEventListener('DOMContentLoaded', function() {
		App.init();
	});

})();