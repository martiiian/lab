import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
import UIButton from './component/UIButton.vue'
import {HttpService} from './api/HttpService.js'
import {VueQueryPlugin} from 'vue-query'

const apiService = new HttpService('http://localhost:3000')

const app = createApp(App)

app.use(VueQueryPlugin)

app.use({
  install(app) {
    app.provide('$api', apiService)
  }
})

app.config.errorHandler = (err, instance, info) => {
  // eslint-disable-next-line no-console
  console.log('Ошибка произошла, простите')
  // eslint-disable-next-line no-console
  console.log(err)
}

app.component('UIButton', UIButton)

app.mount('#app')
