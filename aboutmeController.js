app.controller('aboutmeController', ['$scope','secondjson', 'forecast', 'Lightbox', function($scope, secondjson, forecast, Lightbox){
  
  forecast.success(function(data){
    $scope.aboutme = data;
  });
  
  secondjson.success(function(data){
    $scope.images = data;
  });

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

}]);


