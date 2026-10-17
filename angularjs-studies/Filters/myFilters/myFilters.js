myAngular.filter('newFilter',()=>{
    return (param) => {
        let result="";
        for(let i = 0; i < param.length; i++){
            if(i % 2 == 0){
                result += param[i].toUpperCase();
            }
            else{
                result += param[i].toLowerCase();
            }
        }
        return result;
    }
})