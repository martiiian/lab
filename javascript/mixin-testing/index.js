import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
  methods: {
    someBiba() {
      // do something
      console.log('nigga')
    }
  }
})

new Vue({
  render: c => c(App),
}).$mount('#app')
