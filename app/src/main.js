import Vue from 'vue'
import App from './App'
import router from '@/router'
// Vuex
import store from '@/store'
// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
// とりあえずdevtoolsが使えるようにしておく(使えなくしたくなったらコメントアウトしてbuildするとか)
// https://qiita.com/uehatsu/items/cb41841d75f8c1a36a80
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
