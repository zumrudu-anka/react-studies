let app = angular.module('ToDoApp',[]);

app.controller('headerController', $scope => {
    $scope.AddItem = () => {
        let konu = prompt('Konu');
        let zaman = prompt('Zaman');
        let id = $scope.yapilacaklar.length + 1;
        $scope.yapilacaklar.push({
            id:id,
            title:konu,
            time:zaman,
            isHappen:'Yapılmadı'
        });
    };
});

app.controller('BodyController', $scope => {
    $scope.data = {};
    $scope.yapilacaklar = [
        {
            id:1,
            title:'Kalkış',
            time:'07:00',
            isHappen: 'Yapıldı'
        },
        {
            id:2,
            title:'Kahvaltı',
            time:'07:30',
            isHappen: 'Yapıldı'
        },
        {
            id:3,
            title:'Mesai',
            time:'08:30',
            isHappen: 'Yapılmadı'
        },
        {
            id:4,
            title:'Öğle Yemeği',
            time:'13:30',
            isHappen: 'Yapılmadı'
        },
        {
            id:5,
            title:'Mesai Bitiş',
            time:'18:30',
            isHappen: 'Yapılmadı'
        },
        {
            id:6,
            title:'Akşam Yemeği',
            time:'19:30',
            isHappen: 'Yapılmadı'
        }
    ];
});

app.controller('TableController', ($scope) => {
    $scope.changeItemState = (id) => {
        $scope.yapilacaklar[$scope.yapilacaklar.findIndex(element => element.id === id)].isHappen = 'Yapıldı';
    };
    
    //$scope.hexaNum='';
    // $scope.$watch('hexaNum',()=>{
    //     $scope.hexalNum = myService.hexaFunc($scope.hexaNum);
    // })
    

    // $scope.time = new Date().toLocaleTimeString();
    // $interval(()=>{
    //     $scope.time = new Date().toLocaleTimeString();
    // },1000);
});

app.controller('UserController', ($scope, $http) => {
    $http({
        method:"GET",
        url:'http://localhost:60319/herkes'
    }).then(response => {
        $scope.users = response.data;
    });

    $scope.AddUser = () => {
        let ad = prompt("Ad:");
        let email = prompt("Email:");
        let KatilmaDurumu = prompt("KatilmaDurumu:");
        $http({
            method:"POST",
            url:'http://localhost:60319/ekle',
            data:{
                Ad:ad,
                Eposta:email,
                KatilmaDurumu:KatilmaDurumu
            }
        }).then( response =>{
            $scope.users.push(response.data);
        })
    }

    $scope.DeleteUser = (user) =>{
        $http({
            method:"DELETE",
            url:'http://localhost:60319/sil',
            data:{
                Ad:user.Ad,
                Eposta:user.Eposta,
                KatilmaDurumu:user.KatilmaDurumu
            },
            headers:{
                'Content-type': 'application/json;charset=utf-8'
            }
        }).then(response=>{
            $scope.users.splice($scope.users.findIndex(i => i.Ad == response.data.Ad), 1);
        });
    }
})

app.service('myService', function(){
    this.hexaFunc=(element)=>{
        return element.toString(16);
    }
})

app.filter("ToHexal",["myService", (myService) => {
    return function(param){
        return myService.hexaFunc(param);
    }
}]);

app.controller('Party', ($scope, $http) => {
    $scope.changeKatilma = (UserName) => {
    $scope.katilimcilar[$scope.katilimcilar.findIndex(i => i.Ad === UserName)].KatilmaDurumu = !$scope.katilimcilar[$scope.katilimcilar.findIndex(i => i.Ad === UserName)].KatilmaDurumu;
    }
    
    $http({
        method:'GET',
        url:'http://localhost:60319/herkes'
    }).then(response=>{
        $scope.katilimcilar = response.data;
    })
});

// app.service('myCostumService',()=>{
//     $this.myfunc = (param) =>{
//         return param.toString(16);
//     }
// })

// app.filter('mycustomFilter',['myCostumService',(myCostumService) => {
//     return (x) =>{
//         return myCostumService.myfunc(x);
//     }
// }]);