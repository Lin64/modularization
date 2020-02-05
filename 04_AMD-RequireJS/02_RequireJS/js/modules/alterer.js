define(['dataService','jquery'],function(dataService,$){
    let msg = 'alterer.js';
    function showMsg(){
        console.log(msg,dataService.getName())
    }
    $('body').css({background:'deeppink'});
    return {showMsg};
})