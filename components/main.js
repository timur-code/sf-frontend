import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'

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