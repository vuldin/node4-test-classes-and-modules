'use strict'

//import Car from './Car' // doesn't work in node4!
var Car = require('./cars/Car')
var Tesla = require('./cars/Tesla')

var car1 = new Car()
var car2 = new Tesla()

console.log('car1 faster? '+Car.isFaster(car1,car2))
console.log(car1,car2)
