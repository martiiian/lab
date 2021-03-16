<template lang="pug">
  div
    button#my-button(@click="buttonHandler") click
    div hello
    div#method-change-check
      | {{ someText }}
</template>

<script>
export default {
  data() {
    return {
      someText: 'default'
    }
  },
  methods: {
    buttonHandler() {
      window.biba = 'hello'
    },
    
    changeSomeText() {
      this.someText = 'hey'
    }
  }
}
</script>
