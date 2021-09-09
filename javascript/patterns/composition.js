class Machine {}

const FlyBehavior = (superclass) => class extends superclass {
  lengthOfWing = 200
  getLengthOfWing() {
    return this.lengthOfWing
  }
}

const DriveBehavior = (superclass) => class extends superclass {
  maxSpeed = 200
  getMaxSpeed() {
    return this.maxSpeed
  }
}

const PassengerTransportationBehavior = (superclass) => class extends superclass {
  passengers = []
  addPassenger(passenger) {
    this.passengers.push(passenger)
  }
  removePassenger(passenger) {
    this.passengers = this.passengers.filter((p) => p === passenger)
  }
}

function compose(...mixins) {
  return (superclass) => mixins.reduce((mix, mixin) => mixin(mix), superclass)
}

const composition = compose(PassengerTransportationBehavior, DriveBehavior)(Machine)

class Car extends composition {

}

class Airplane {}

const car = new Car()
car.addPassenger({ name: 'Vasya', lastName: 'Biba' })
console.log(car.passengers)