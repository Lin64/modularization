(function(){
// 2配置
    requirejs.config({
        baseUrl:'js/',   //基本路径
        paths:{             //配置路径
            alterer:'./modules/alterer',
            dataService:'./modules/dataService',
            // jQuery:'./libs/jquery'   //查看jquery源码发现jQuery源码在AMD规范抛出的是jquery
            jquery:'./libs/jquery',
            angular:'./libs/node_modules/angular/angular'
        },
        shim:{
            angular:{   //angular额外配置，感觉好像两层抛出才拿得到
                exports:'angular'
            }
        }
    })
// 1
    requirejs(['alterer','angular'],function(alterer,angular){
        alterer.showMsg();
        console.log(angular)
    })
})()