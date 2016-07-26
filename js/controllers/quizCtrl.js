(function () {
	angular.module("pokemonQuiz")
	.controller("quizCtrl", ["quizService", "dataService", function (quizService, dataService) {
		var self = this;
		self.quizObj = quizService;
		self.dataObj = dataService;
		self.activeQuestion = 0;
		self.questionAnswered = function () {

		};

		dataService.getQuestions().then(function (response) {
			self.questions = response.data;
		});

		self.getActiveQuestion = function () {

		}
	}]);
})();