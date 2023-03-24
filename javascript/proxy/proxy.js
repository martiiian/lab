const person = {
  name: 'Biba',
  age: 21,
}

const proxyOb = new Proxy(person, {
  get(target, prop) {
    return target[prop] + 'biba';
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
    throw new Error()
    }
  }
});

console.log(proxyOb.age)
