myAngular.directive('newDirective', () => {
    return {
        scope:{
            myItem: '@'
        },
        template:`<h1>Hoşgeldin {{myItem}}</h1>`
    }
});
