(function () {
	angular.module("pokemonQuiz")
	.factory("quizService", function () {
		var quizObj = {
			startQuiz: false,
			startQuizFunc: function () {
				quizObj.startQuiz = true
			}
		};
		return quizObj;
	});
})();