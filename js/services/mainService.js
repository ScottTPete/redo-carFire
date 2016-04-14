angular.module('carApp')
	.service('mainSvc', function() {
	
	var url = 'https://stp-carfire.firebaseio.com/Cars/';
	
		this.getCars = function() {
			return new Firebase(url);
		};
	
		this.getCar = function(carId) {
			return new Firebase(url + carId);
		}
		
		this.getComments = function(carId) {
			return new Firebase(url + carId + '/comments');
		}
	
})