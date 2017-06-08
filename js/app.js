 var app = angular.module('app', ['ngRoute', 'angular-loading-bar', 'ngAnimate'], function($interpolateProvider, cfpLoadingBarProvider) {
     cfpLoadingBarProvider.includeSpinner = false;
 });
 app.config(function($routeProvider, $locationProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'templates/profile.html',
             controller: 'Profile'
         })
         .when('/repositories', {
             templateUrl: 'templates/repositories.html',
             controller: 'Repositories',
             reloadOnSearch: false
         })
         .when('/stars', {
             templateUrl: 'templates/stars.html',
             controller: 'Stars',
             reloadOnSearch: false
         })
         .when('/followers', {
             templateUrl: 'templates/follower.html',
             controller: 'Followers',
             reloadOnSearch: false
         })
         .when('/following', {
             templateUrl: 'templates/following.html',
             controller: 'Following',
             reloadOnSearch: false
         });
     //$locationProvider.otherwise('/');

     // configure html5 to get links working on jsfiddle
     $locationProvider.html5Mode(false);
 });

 app.run(['$rootScope', function($rootScope, $http) {
     // Etc. Initialize here.
     $rootScope.user = {};
     $rootScope.user.loaded = false;
 }]);