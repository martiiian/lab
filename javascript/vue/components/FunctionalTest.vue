<template functional>
  <div v-bind="data.attrs" v-on="listeners">
    here we go {{ $options.methods.biba(props.one) }}
    <button>ops</button>
  </div>
</template>

<script>
export default {
  methods: {
    biba(val) {
      // eslint-disable-next-line no-console
      console.log(val)
      return 'biba'
    }
  }
}
</script>