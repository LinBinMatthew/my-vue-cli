import Vue from 'vue'   // 引入vue模块
import App from './app.vue'  //引入文件(组件) app

new Vue({                //vue写法 新建一个实例 作为根元素
  el:"#app",             //元素  
  template:'<App/>',  // 模板使用标签<app/> 根元素的模版
  components:{App}   // 组件app 可在根元素下使用的组件
})