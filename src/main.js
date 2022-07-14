import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import Drag from 'v-drag'

const app = createApp(App)

app.use(Drag)
app.mount('#app')

