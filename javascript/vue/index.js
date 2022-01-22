import Vue from 'vue'
import App from './App.vue'
//
// new Vue({
//   functional: true,
//
//   render: function(c) {
//     return c('h1', {}, ['value'])
//   }
// }).$mount('#root')

new Vue({
  render: c => c(App)
}).$mount('#root')
