(function () {
	angular.module("pokemonQuiz")
		.controller('listCtrl', function ($http) {
			var self = this;
			self.quantity = 10;
			self.currentPokemon = {};

			self.showPokemonInfo = function(pokemon) {
				self.currentPokemon = pokemon;
			};

			$http.get("../pokemon.json")
			.then(function (response) {
				self.pokemons = response.data;
			}, function (error, status) {
				console.log("error");
			});
		});
})();