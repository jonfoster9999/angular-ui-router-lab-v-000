angular
    .module('app', ['ui.router'])
    .config(function($stateProvider){
    	$stateProvider
    		.state('user', {
    			url: '/user/:id',
    			templateUrl: 'views/user.html',
    			controller: 'UserController',
    			resolve: {
    				user: function($stateParams, UserService) {
    					console.log($stateParams)
    					return UserService.getUser($stateParams)
    				}
    			}
    		})
    })