import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import store from './store/index.js'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Liked from './components/Liked.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faEnvelope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMq, {
    breakpoints: {
        sm: 426,
        md: 769,
        lg: Infinity,
    }
})

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })

  export default {
   
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/node_modules/bootstrap/dist/css/bootstrap.min.css'  
    ]
  
    

  }

  Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Products },
  { path: '/cart', component: Cart },
  { path: '/liked', component: Liked },
]

// Register routes
const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  store,
})
  