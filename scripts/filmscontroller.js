var App = App || {};

(function (){
	
	'use strict';

	var FilmsController = {
		index: function() {
			microAjax('http://dennistel.nl/movies', function(responseText) {
				var films = JSON.parse(responseText);

				films.forEach(function (film){
					var total = 0;
					film.reviews.forEach(function (review){
						total += review.score;
					});
					film.averageScore = Math.round((total / film.reviews.length) * 10) / 10;
				});

				App.Template.render('page-films', {
					films: films
				});
			});
		}
	};

	App.FilmsController = FilmsController;

})();