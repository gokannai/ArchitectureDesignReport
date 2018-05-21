var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/', {
		controller:'adrmnController',
		templateUrl: 'views/adr.html'
		//templateUrl: 'views/login.html'
	})
	.when('/adrmn', {
		controller:'adrmnController',
		templateUrl: 'views/adr.html'
	})
	.when('/adrmn/details/:id',{
		controller:'adrmnController',
		templateUrl: 'views/adr_doc_details.html'
	})
	.when('/adrmn/add',{
		controller:'adrmnController',
		templateUrl: 'views/add_adr_doc.html'
	})
	.when('/adrmn/edit/:id',{
		controller:'adrmnController',
		templateUrl: 'views/edit_adr.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});