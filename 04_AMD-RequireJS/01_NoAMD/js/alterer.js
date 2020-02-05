(function(window,dataService){
    let msg = 'alterer.js';
    function showMsg(){
        console.log(msg,dataService.getName());
    }
    window.alterer = {showMsg};
})(window,dataService)