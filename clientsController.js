app.controller('clientsController', ['$scope','secondjson', 'forecast', function($scope, secondjson, forecast){
  
  forecast.success(function(data){
    $scope.aboutme = data;
  });
  
  secondjson.success(function(data){
    $scope.images = data;
  });

}]);


