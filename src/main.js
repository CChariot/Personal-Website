import { createApp } from 'vue'
import App from './App.vue'
import inView from './directives/inView.js'
import './assets/theme.css'

const app = createApp(App)
app.directive('in-view', inView)   // use as v-in-view on any element
app.mount('#app')
