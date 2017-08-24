app.controller('homeController', ['$scope','forecast', function($scope, forecast){
	forecast.success(function(data){
      	$scope.homecontaint = data;
    })
}]);

