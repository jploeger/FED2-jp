// Variable APP wordt APP genoemd, indien die niet bestaat: Maak een nieuwe namespace aan
// Globale namespace declaratie is een nieuw object om je code af te schermen van de rest (om geen conflicten te veroorzaken)
var APP = APP || {};

// Maak lege (naamloze) function aan zonder argumenten
(function () {
	// Data objecten
	// Dit is een object binnen de namespace APP
	// Schedule is een JSON (javascript object notation) object (format, conventies hoe het eruit moet zien)
	APP.schedule = {
		// Aanroepwaardes
		title:'Schedule',
		description:'Schedule is de eerste pagina',
		// Waardes
		items: [
			{
				title: 'Item 1',
				description: 'Item 1 is het eerste item'
			}, {
				title: 'Item 2',
				description: 'Item 2 is het tweede item'
			}, {
				title: 'Item 3',
				description: 'Item 3 is het derde item'
			}, {
				title: 'Item 4',
				description: 'Item 4 is het vierde item'
			}
		]
	};

	// Dit is een nieuw object binnen de namespace APP
	APP.ranking = {
		title:'Ranking',
		description:'Ranking is de tweede pagina'
	};

	// Dit is een nieuw object binnen de namespace APP
	APP.game = {
		title:'Game',
		description:'Game is de derde pagina'
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
				'/schedule': function() {
					// Als je op /schedule komt, render pagina
					APP.page.render('schedule');
				},
				'/ranking': function() {
					APP.page.render('ranking');
				},
				'/game': function() {
					APP.page.render('game');
				},
				// Wildcard > Als niks laad, laat opzet van schedule pagina zien
				'*': function() {
					APP.page.render('schedule');
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
		// var route = "schedule"
		render: function (route) {
			// http://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
			// The eval() function evaluates or executes an argument (eval haalt objecten op)
			// De variabele data is gelijk aan App.schedule
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