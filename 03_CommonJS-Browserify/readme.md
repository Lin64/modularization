1、创建目录结构
    /-js
        /-dist  //打包生成文件的目录
        /-src   //源码所在的目录
            /-module1.js
            /-module2.js
            /-module3.js
            /-app.js    //应用主源文件
    /-index.html
    /-package.json
2、下载browserify
    先全局安装
    再局部安装  npm install browserify --save-dev   
                //dev 开发环境  开发依赖的包
                //    生产环境  上线跑的包
3、编写js文件

4、打包处理js：
    browserify js/src/app.js -o js/dist/bundle.js   //-o  output
    在vscode上编译时报错：
        browserify : 无法加载文件 d:\fronted\node\node_global\browserify.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
    解决方法：将cmd用管理员身份运行即可
5、页面引入
    <script src="js/dist/bundle.js">