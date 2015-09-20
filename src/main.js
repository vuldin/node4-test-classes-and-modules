'use strict'

import Car from './Car'
import Tesla from './Tesla'

var car1 = new Car()
var car2 = new Tesla()

console.log('car1 faster? '+Car.isFaster(car1,car2))
console.log(car1,car2)
