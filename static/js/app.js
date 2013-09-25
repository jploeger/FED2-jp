// Variable APP wordt APP genoemd, indien die niet bestaat: Maak een nieuwe namespace aan
// Globale namespace declaratie is een nieuw object om je code af te schermen van de rest (om geen conflicten te veroorzaken)
var APP = APP || {};

// Maak lege (naamloze) function aan zonder argumenten
(function () {
	// Data objecten
	// Dit is een object binnen de namespace APP
	// Game is een JSON (javascript object notation) object (format, conventies hoe het eruit moet zien)
	APP.game = {
		// Aanroepwaardes
		title:'Game',
		description:'Overzicht score en teams',
		// Waardes
		items: [
			{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
			{ score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
			{ score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
			{ score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
			{ score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
			{ score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
			{ score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
			{ score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
			{ score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
			{ score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
			{ score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
			{ score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
			{ score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
			{ score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
			{ score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
			{ score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
			{ score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
			{ score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
			{ score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
			{ score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
			{ score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
			{ score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
			{ score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		]
	};

	// Dit is een nieuw object binnen de namespace APP
	APP.ranking = {
		title:'Ranking',
		description:'Klassement van alle teams',
		// Waardes
		items: [
			{ team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
			{ team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
			{ team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
			{ team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
			{ team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		]
	};

	// Dit is een nieuw object binnen de namespace APP
	APP.schedule = {
		title:'Schedule',
		description:'Het rooster met overzicht van de tijden en teams',
		// Waardes
		items: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
			{ date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
			{ date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
			{ date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
			{ date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
			{ date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
			{ date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
			{ date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
			{ date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
			{ date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};
	
	// Controller Init (conventie voor als er straks meer wordt aangeroepen)
	APP.controller = {
		// Initialize betekent uitvoeren (best practice)
		init: function () {
			// Initialize router: Ga naar de namespace APP, zoek namespace router, daarbinnen: voer init uit
			APP.router.init();
		}
	};

	// Wat router is: URL veranderen, content inladen, content weergeven middels CSS HTML
	APP.router = {
		init: function () {
			// Routie bestaat al (plugin) = een micro library
			// Routie detecteert waar je bent
			routie({
				// URL aangeven
				'/game': function() {
					APP.page.render('game');
				},
				'/ranking': function() {
					APP.page.render('ranking');
				},
				'/schedule': function() {
					// Als je op /schedule komt, render pagina
					APP.page.render('schedule');
				},
				// Wildcard > Als niks laad, laat opzet van game pagina (home) zien
				'*': function() {
					APP.page.render('game');
				}
			});
		},

		// Naar andere section gaan binnenin dezelfde pagina en URL veranderen
		change: function () {
			// Opvragen op welke pagina we zijn (wat er in is gevuld na de slash)
			// window is browser document
			// location is URL
			// hash is # (numeriek teken)
			var route = window.location.hash.slice(2),
				// Var hoeft niet steeds worden geschreven
				sections = qwery('section'),
				// Zoeken in array: Naar date-route in html elementen
				// Voeg variabele route toe in string
				section = qwery('[data-route=' + route + ']')[0];

			// Laat active section zien, verberg al het ander
			// Als variable section bestaat en niet leeg is
			if (section) {
				// for loop aanmaken om de relevante sections af te lopen
				// De resultaten van de array verwerken
				for (var i=0; i < sections.length; i++){
					// Voor elke instantie waar i kleiner is dan het aantal sections gaan we vervolgens 
					// DIE specifieke section de class active weghalen
					sections[i].classList.remove('active');
				}
				section.classList.add('active');
			}

			// Default route
			// Als je niet een route hebt meegegeven laat je altijd de eerste pagina zien
			if (!route) {
				sections[0].classList.add('active');
			}

		}
	};

	// Pages
	APP.page = {
		// var route = "game"
		render: function (route) {
			// http://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
			// The eval() function evaluates or executes an argument (eval haalt objecten op)
			// De variabele data is gelijk aan APP.game
			var data = eval('APP.'+route);

			// Transparency en qwery libraries
			Transparency.render(qwery('[data-route=' + route + ']')[0], data);
			APP.router.change();
		}
	}

	// DOM ready - Scenario doorlopen
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();