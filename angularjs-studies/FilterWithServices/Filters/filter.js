myAngular.filter('myFilter',["myService", function(myService){
    return (param)=>{
        return myService.ServiceFunction(param);
    }
}]);