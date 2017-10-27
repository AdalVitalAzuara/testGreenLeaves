angular.module('myApp', ['ngMap']).controller('MyCtrl', function(NgMap, $scope) {

  $scope.placeChanged = function() {
    $scope.place = this.getPlace();
    console.log('location', $scope.place.geometry.location);
    $scope.map.setCenter($scope.place.geometry.location);
  }
  $scope.formVisibility = false;
  $scope.enviarFormulario = function (form) {
    $scope.formVisibility = true;
    $scope.nombre = document.getElementById("_idname").value;
    $scope.email = document.getElementById("_idmail").value;
    $scope.lugar = document.getElementById("_idplace").value;
    $scope.fecha = new Date();
    //$scope.fecha = document.getElementById("_iddate").value;
 };
 
  NgMap.getMap().then(function(map) {
    $scope.map = map;
  });
 

});