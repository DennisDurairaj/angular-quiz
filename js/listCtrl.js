(function () {
	angular.module("pokemonQuiz")
		.controller('listCtrl', function ($http) {
			var self = this;
			$http.get("../pokemon.json")
			.then(function (response) {
				self.pokemons = response.data;
				console.log(self.pokemons[1]);
			}, function (error, status) {
				console.log("error");
			});
		});
})();