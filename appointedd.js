(function() {
  var app = angular.module('appt', []);
  
  app.controller('appointmentsController', function($scope, $http) {
   var data = {};
   $scope.currentTimeZone = '+0000';
   $scope.timeZones = [
                       {city:'Berlin', zone:'+0100'}, 
                       {city:'London', zone:'+0000'}, 
                       {city:'New York', zone:'-0500'}, 
                       {city: 'Sydney', zone:'+1000'}
                      ];
   
   $http({
     method: 'GET',
     url: 'https://s3-eu-west-1.amazonaws.com/appointedd-assets/testbookingdata.json'
   })
   .then(function(response) {
     $scope.data = response.data;
     console.log(data)
   }, function() {
     console.log("Error");
  	});  
  	
  	
  	$scope.changeTimeZone = function (value) {
  		currentTimeZone= value;
  		}
    });
 
  
  app.directive('yourAppointments', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/appointedd.html',
      controller: 'appointmentsController',
      controllerAs: 'appointmentCtrl'
    };
  });
})();
