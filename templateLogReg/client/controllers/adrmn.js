var myApp = angular.module('myApp');

console.log('adrmnController loading...');

myApp.controller('adrmnController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('adrmnController loaded...');

	$scope.getadrmns = function(){
		$http({
			method: 'GET', 
			url: '/api/adrmn'
		 }).then(function (response) {
				console.log(response.data, 'res' );
				//alert('We have Data');
				//$scope.datas = response.data;
			$scope.adrmn = response.data;
			},function (error){
				console.log(error, 'can not get data.');
				alert('can not get data.');
		});
	}

	console.log('getadrmn loading...');
	$scope.getadrmn = function(){
		console.log('getadrmn loaded...');
		var id = $routeParams.id;
		$http({
			method: 'GET', 
			url: '/api/adrmn/'+id
		}).then(function (response) {
			console.log(response.data, 'res');
			//alert('We have Data');
			$scope.adrm = response.data;
		},function (error){
			console.log(error, 'can not get data.');
	//alert('can not get data.');
		});
	}
	
	$scope.addadr = function(){
	
		console.log('addadr loaded...');
	//alert(angular.toJson($scope.adr))
		$http({
			method: 'POST', 
			url: '/api/adrmn/',
			data: $scope.adr
			}).then(function (response) {
			console.log(response.data, 'req');
			//alert('We have Data '+ response.data);
			// $scope.adrm = response.data;
			alert('ADR Doc Added');
			window.location.href='#!/adrmn';
		},function (error){
			console.log(error, 'Error Occurred');
			alert('Error Occurred');
		});
	}
	
	//Update
	$scope.updadr = function(){
	
		console.log('updadr loaded...');
	//alert(angular.toJson($scope.adr))
	var id = $routeParams.id;
		$http({
			method: 'PUT', 
			url: '/api/adrmn/'+id,
			data: $scope.adr
			}).then(function (response) {
			console.log(response.data, 'req');
			//alert('We have Data '+ response.data);
			// $scope.adrm = response.data;
			alert('ADR Doc Updated');
			window.location.href='#!/adrmn';
		},function (error){
			console.log(error, 'Error Occurred');
			alert('Error Occurred');
		});
	}
	
	//Delete
	//Update
	$scope.deladr = function(id){
	
		console.log('deladr loaded...');
	//alert(angular.toJson($scope.adr))
	//var id = $routeParams.id;
		$http({
			method: 'DELETE', 
			url: '/api/adrmn/'+id,
			data: $scope.adr
			}).then(function (response) {
			console.log(response.data, 'req');
			//alert('We have Data '+ response.data);
			// $scope.adrm = response.data;
			alert('ADR Doc Deleted');
			window.location.href='#!/adrmn';
		},function (error){
			console.log(error, 'Error Occurred');
			alert('Error Occurred');
		});
	}
	
	

}]);