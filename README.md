#什么是webpack
####webpack 是一个用于现代 JavaScript 应用程序的主流模块化打包工具。压缩工具。它有着 高度可配置性，可以很好满足各类项目需求。

# 从0开始配置一个webpack+react+antd+dva并兼容js、jsx、ts、tsx和less、sass、stylus的框架
## 1.开始安装

><font color='red'><strong>mkdir webpack-demo <br>
><strong>cd webpack-demo  <br>
><strong>npm init -y <br>
><strong>npm install webpack webpack-cli --save-dev	</strong></font>

##此时会生成这样一个目录

![start1]('./assets/image/1.png')

### 1.webpack4.0X已经默认有配置可以打包，默认指向src/index.js。

### 2.为了定制化根目录下创建webpack.config.js文件并初始化下默认配置
![start2]('./assets/image/2.png')

#<font color="orange">开始实操配置，重点来了</font>

###1.创建index.html作为dom挂载文件

###2.创建src下的基础项目目录表

![start3]('./assets/image/3.png')

##2.由浅入深，先从react + js开始
###下载react以及react和js相关babel-loader

><font color="red"><strong>npm install react react-dom --save</strong></font> <br>
>
>><font color="#000"><strong>记住要先下babel-loader再跟后面babel，如此版本才会对应</strong></font><br>
>
>><font color="red"><strong>npm install babel-loader @babel/preset-react @babel/preset-env @babel-core --save-dev</strong></font> <br>

### 此时 npx webpack 打包会生成一个dist目录，打包也是成功的
![start4]('./assets/image/4.png')

###这时只打包了一个main.js,我们的index.html并没有打包过来，这需要我们下载插件打包index.html到dist目录

><font color="red"><strong>npm install html-webpack-plugin --save-dev</strong></font> <br>
>
>>修改webpack.config.js配置
>
>>![start5]('./assets/image/5.png')
>>
>>修改src/index.js <br>
>
>>![start6]('./assets/image/6.png')
>
>此时已经可以看到页面了,js + react配置成功
>
>![start7]('./assets/image/7.png')

### 这时我们可以写页面了，页面免不了引入css样式，直接引入样式文件到js会编译报错，所以我们需要css配置

><font color="red"><strong>npm install style-loader css-loader --save-dev</strong></font> <br>
>
>>![start8]('./assets/image/8.png')
>
>>![start9]('./assets/image/9.png') <br>
>
> 如果以模块形式引入样式，配置应该如下。(注意：引入antd组件后.css的rule得把modules设置为false，否则antd组件样式无效)
>
>>![start8]('./assets/image/10.png')
>
>>![start8]('./assets/image/11.png')
>

##3.那我们在集成一下antd 以及less，sass，stylus
### 下载antd组件库
><font color="red"><strong>npm install antd --save</strong></font> <br>
> 我们可以使用这个插件babel-plugin-import按需引入,并修改如下配置
> 
> <font color="red"><strong>npm install babel-plugin-import --save-dev</strong></font> <br>
> 
> ![start8]('./assets/image/14.png') <br> 
> 此时可以直接使用没有问题（注意：把css-loader下的module改为false）
>>
>>![start8]('./assets/image/12.png')
>>![start8]('./assets/image/13.png') <br>
>
>集成 less， sass, stylus,
>
> <font color="red"><strong>npm install less less-loader sass sass-loader node-sass stylus stylus-loader --save-dev</strong></font> <br>
> 
>配置如下:(注意 1. postcss 是处理.css文件做浏览器兼容补全用的包. 2. 安装sass需要安装node-sass)
>
>![start8]('./assets/image/17.png') <br>
>![start8]('./assets/image/15.png') <br>
>![start8]('./assets/image/16.png') <br>
>
>现在我们的预处理器就安装并配置好了，可以随心所欲的使用less,sass,stylus了
>
>接下来再兼容配置ts+tsx
>
><font color="red"><strong>npm install @babel/preset-typescript @babel/plugin-transform-runtime --save-dev</strong></font> <br>
>
>![start8]('./assets/image/18.png')
>

##4.现在开发中都缺不了路由和状态管理，dva是一个很好的状态管理库，我们集成一下
>安装： <font color="red"><strong>npm install react-router-dom dva --save</strong></font> <br>
>修改index.js 入口文件
>
>![start8]('./assets/image/19.png')
>
>新建router文件夹，router/index.js 为路由文件，随意写下配置router就可以访问页面了，下面是个简单示例
>![start8]('./assets/image/20.png')
>
>如此最简单的路由也配置好了
>
>dva的使用我贴下简单示例
>
>src下建models文件夹，新建home.js
>
>![start8]('./assets/image/21.png')
>
>其中state就是状态存储的地方，用下面方式关联此状态，修改方式通过dispath触发model里的reducers
>
>![start8]('./assets/image/22.png')
>
>好了，状态管理库关联好了

## 5.增加devServer 开启热更新
> <font color="red"><strong>npm install webpack-dev-server --save-dev</strong></font> <br>
> 
> ![start8]('./assets/image/23.png')
> ![start8]('./assets/image/24.png')
> 
## 6.最后，共享几个用得上的小插件
* 1. mini-css-extract-plugin 抽离css并独立为css文件，优于extract-text-webpack-plugin
* 2. clean-webpack-plugin  清除 打包之后 dist 目录下的其他多余或者无用的代码
* 3. webpackbar  构建时的进度条
* 4. optimize-css-assets-webpack-plugin 减小 css 打包后的体积
* 5. compression-webpack-plugin   启用 gzip 压缩，可大幅缩减传输资源大小

更多插件可看官方文档 [webpack官网]("https://webpack.docschina.org/plugins/")
 