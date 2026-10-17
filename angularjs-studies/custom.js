var app=angular.module('myApp',['ngAnimate']);
app.controller('div1controller', $scope => {
    $scope.isim="osman";
    $scope.siyahStyle = {
        'background-color':'black',
        'color':'white'
    };
    $scope.griStyle = {
        'background-color':'gray',
        'color':'yellow'
    };
    console.log($scope.chooseStyle);
});

app.controller('div2controller', $scope=> {
    $scope.count=15;
});

app.controller('MySelectController', $scope=>{
    $scope.myoptions=[
    { name:'oso', age:15 },
    { name:'osi', age:5 },
    { name:'yeni', age:25 },
    { name:'son', age:45 },
    { name:'eski', age:34 }];
    console.log($scope.trySelect);
});

app.controller('LearningEvents', $scope => {
    $scope.count = 0;
    $scope.myBlur = (event) => {
        alert(event);
    }
})

app.controller('SwitchCases', $scope => {
    
})

app.controller('animateController', $scope =>{
    
})

app.controller('DirectiveCont', $scope=>{
    $scope.name2 = "asdasd";
    $scope.myClick = () => {
        console.log("asdasd");
    }
})

app.directive('newDirective', () =>{
    return{
        restrict:'E',
        scope:{
            name:'=',
            clickfunc:'&'
        },
        template: () => {
            return `{{name}}<h3>yeniiiiiiiiiiiiiiii</h3>
            <a href="#" ng-click="clickfunc()">qwd</a>
            `;
        }
    };
})