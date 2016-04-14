angular.module('carApp')
	.controller('carCtrl', function ($scope, carRef, $firebaseObject, $firebaseArray, commentsRef) {
	
		$scope.car = $firebaseObject(carRef);
		
		$scope.comments = $firebaseArray(commentsRef);
	
		
	
})