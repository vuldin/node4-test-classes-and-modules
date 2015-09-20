'use strict'

class Car{
  constructor(){
    this.fuel = 0
    this.distance = 0
    this.topSpeed = Math.random()
  }
  move(){
    if(this.fuel < 1) throw new RangeError('no fuel')
    this.fuel--
    this.distance += 2
  }
  addFuel(){
    if(this.fuel >= 60) throw new RangeError('fuel tank full')
    this.fuel++
  }
  static isFaster(car1,car2){
    return car1.topSpeed > car2.topSpeed
  }
}

//export default new Car() // doesn't work in node4!
module.exports = Car
