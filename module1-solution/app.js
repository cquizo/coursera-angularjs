(function () {
'use strict';

angular.module('lunchCheckApp', [])
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.messageType = "none";
  $scope.border = "";

  $scope.lunchChecker = function () {
    var numberOfItems = countItems($scope.items);
    $scope.message = "Please enter data first";
    $scope.messageType = "danger";
    $scope.border = "green";
    if(numberOfItems <= 0) {
      $scope.border = "red";
    } else if(numberOfItems < 4) {
      $scope.message = "Enjoy!";
      $scope.messageType = "success";
    } else {
      $scope.message = "Too much!";
      $scope.messageType = "warning";
    }
  };
};

function countItems(values) {
  var arrayValues = values.split(',');
  var count = 0;
  for (var i = 0; i < arrayValues.length; i++) {
    if (arrayValues[i].trim() != ''){
      count = count + 1;
    }
  }
  return count;
}

})();
