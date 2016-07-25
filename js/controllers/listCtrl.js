(function () {
	angular.module("pokemonQuiz")
	.controller("listCtrl", ["$http", "quizService", "dataService", function ($http, quizService, dataService) {
		var self = this;
		dataService.getPokemonData().then(function(response) {
			self.pokemons = response.data;
			// console.log(self.pokemons);
		});
		self.quantity = 10;
		self.currentPokemon = {};
		self.searchedPokemon = "";
		self.quizObj = quizService;

		self.beginQuiz = function () {
			quizService.startQuizFunc();
		};

		self.showPokemonInfo = function(pokemon) {
			self.currentPokemon = pokemon;
		};

	}]);
})();