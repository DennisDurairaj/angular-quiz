(function () {
	angular.module("pokemonQuiz")
	.factory("dataService", ["$http", function ($http) {
		return {
			getPokemonData: function () {
				return $http.get("../../pokemon.json");
			},
			getQuestions: function () {
				return $http.get("../../questions.json");
			}
		}
	}]);
})();