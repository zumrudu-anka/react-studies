myAngular.controller("myController",($scope, $myService)=>{
    $scope.num1 = 0;
    $scope.numara = $myService.myFunction($scope.num1);
});