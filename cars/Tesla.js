'use strict'

//import Car from './Car' // doesn't work in node4!
var Car = require('./Car')

class Tesla extends Car{
  move(){
    super.move()
    this.distance += 4
  }
}

//export default new Tesla() // doesn't work in node4!
module.exports = Tesla
