var app = angular.module('MyApp', ["ngRoute", "bootstrapLightbox", "leaflet-directive"]);
  app.config(function($routeProvider){
  	$routeProvider
  	.when('/home',{
  		templateUrl : 'partials/home.html',
  		controller : 'homeController'
  	})
  	.when('/aboutme',{
  		templateUrl : 'partials/aboutme.html',
  		controller : 'aboutmeController'
  	})
    .when('/clients',{
      templateUrl : 'partials/clients.html',
      controller : 'clientsController'
    })
    .when('/contactme',{
      templateUrl : 'partials/contactme.html',
      controller : 'contactmeController'
    })

    .otherwise({
      redirectTo : '/home' 
    })
  });

  app.factory('forecast', ['$http', function($http){
    return $http.get('js/data.json')
    .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      })  
  }]);

  app.factory('secondjson', ['$http', function($http){
    return $http.get('js/data1.json')
    .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      })  
  }]);




  


