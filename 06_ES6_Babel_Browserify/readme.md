1、定义package.json文件
    {
        "name":"es6_babel-browserify",
        "version":"1.0.0"
    }
2、安装babel-cli，babel-preset-es2015和browserify
    npm install babel-cli -g    //cli：command line interface  命令行接口
    npm install babel-preset-es2015 --save-dev
    preset预设(将es6转化为es5的所有插件打包)
        react有语法叫jsx，js引擎不认识jsx，需要用babel转化
3、根目录下创建.babelrc文件     //rc:run control,运行时读取
    {
        "preset":["es2015"]
    }
4、编码

5、编译
    使用Babel将ES6编码为ES5代码（但包含CommonJS语法）：babel js/src -d js/lib
        js/src的意思是转化src目录下的所有js文件（认为其语法是es6）
        js/lib的意思是，将转化后的代码放入lib文件夹下
    使用Browserify编译js：browserify js/lib/app.js -o js/lib/bundle.js
6、页面引入调试
