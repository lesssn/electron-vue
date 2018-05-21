import Vue from 'vue'
{{#isEnabled plugins 'axios'}}
import axios from 'axios'
{{/isEnabled}}

import App from './App'
{{#isEnabled plugins 'vue-router'}}
import router from './router'
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
import store from './store'
{{/isEnabled}}

{{#isEnabled plugins 'element-ui'}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
{{/isEnabled}}

{{#isEnabled plugins 'vue-electron'}}
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
{{/isEnabled}}
{{#isEnabled plugins 'axios'}}
// 从主进程导入axios，避免在渲染进程中axios无法跨域以及无法设置cookie、user-agent等特殊字段
Vue.http = Vue.prototype.$http = require('electron').remote.require('axios')
{{/isEnabled}}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  {{#isEnabled plugins 'vue-router'}}
  router,
  {{/isEnabled}}
  {{#isEnabled plugins 'vuex'}}
  store,
  {{/isEnabled}}
  template: '<App/>'
}).$mount('#app')
