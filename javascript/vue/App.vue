<template lang="pug">
  .app
    FunctionalTest(:one="one" v-on="{ click: funcClickHandler }")
      | slot body
    button(@click="anotherDynamic(biba)")
</template>

<script>
import FunctionalTest from './components/FunctionalTest'

export default {
  data() {
    return {
      one: 'two',
      biba: ''
    }
  },

  components: {
    FunctionalTest
  },

  created() {
    setTimeout(() => {
      this.one = 'three'
      this.biba = 'biba'
    }, 3000)
  },
  
  methods: {
    anotherDynamic(biba) {
      // eslint-disable-next-line no-console
      console.log(biba)
    },
    
    funcClickHandler() {
      // eslint-disable-next-line no-console
      console.log('here callb b-ack')
    }
  }
}
</script>
