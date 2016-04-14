angular.module('carApp', ['ui.router', 'firebase'])

	.config(function($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('cars', {
				url: '/cars',
				templateUrl: '../views/cars.html',
				controller: 'carsCtrl',
				resolve: {
					carsRef: function(mainSvc) {
						return mainSvc.getCars();
					}
				}
			
			})
			.state('car', {
				url: '/car/:carId',
				templateUrl: '../views/car.html',
				controller: 'carCtrl',
				resolve: {
					carRef: function(mainSvc, $stateParams) {
						return mainSvc.getCar($stateParams.carId);
					},
					commentsRef: function(mainSvc, $stateParams) {
						return mainSvc.getComments($stateParams.carId);
					}
				}
			})
	
	
	
		$urlRouterProvider.otherwise('/cars');
	
})