app.controller('contactmeController', ['$scope', '$http', function($scope, $http){
  $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }


  $scope.mapCenter = { 
    lat: 41.8781,
    lng: 87.6298,
    zoom: 6
  };
  
  $scope.mapMarkers = 
  [ 
   { 
     lat: 37.3382, 
     lng: 121.8863, 
     message: "sanjose"
   }, 
   { 
     lat: 37.3382,
     lng: 37.3382, 
     message: "sanjose" 
    }, 
    { 
     lat: 41.8781,
     lng: 87.6298, 
     message: "Chicago,Illinois" 
    } 
   ];

}]);
