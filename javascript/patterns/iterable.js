const obj = {
  biba: 0,
  maxBiba: 3,

  throw() {
    console.log('hello from throw')
    return {
      done: true,
      value: biba
    }
  },


  next() {
    this.biba++
    if (this.biba > this.maxBiba) {
      return {
        done: true,
        value: this.biba
      }
    } else {
      return {
        done: false,
        value: this.biba
      }
    }
  },

  [Symbol.iterator]() {
    return this
  }
}
