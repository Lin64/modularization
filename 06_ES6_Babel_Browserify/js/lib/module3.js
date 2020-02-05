'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// export default ()=>{
//     console.log('我是默认暴露的');
// }

exports.default = {
    msg: '默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
};