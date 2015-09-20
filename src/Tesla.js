'use strict'

class Tesla extends Car{
  move(){
    super.move()
    this.distance += 4
  }
}

export default new Tesla()
