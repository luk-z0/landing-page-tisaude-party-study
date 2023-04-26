import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faPhone, 
    faEnvelope, 
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

import { 
    faFacebookSquare, 
    faTwitterSquare, 
    faLinkedin, 
    faInstagramSquare 
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faPhone, 
    faEnvelope, 
    faLocationDot, 
    faFacebookSquare,
    faFacebookSquare, 
    faTwitterSquare, 
    faLinkedin, 
    faInstagramSquare
)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
