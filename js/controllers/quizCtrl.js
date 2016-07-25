(function () {
	angular.module("pokemonQuiz")
	.controller("quizCtrl", ["quizService", "dataService", function (quizService, dataService) {
		var self = this;
		self.quizObj = quizService;
		self.dataObj = dataService;
	}]);
})();