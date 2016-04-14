angular.module('carApp')
	.controller('carsCtrl', function ($scope, $firebaseArray, carsRef, $firebaseObject) {

		$scope.cars = $firebaseArray(carsRef);



})