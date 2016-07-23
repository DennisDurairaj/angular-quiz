(function () {
	angular.module("pokemonQuiz")
		.controller('listCtrl', function ($http) {
			var self = this;
			self.quantity = 10;

			$http.get("../pokemon.json")
			.then(function (response) {
				self.pokemons = response.data;
			}, function (error, status) {
				console.log("error");
			});
		});
})();