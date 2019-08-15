// Your code here
console.log("Locked and loaded");

class Polygon{

  constructor(intArray){
    this.sidesArray = intArray
  }

  get countSides(){
    return this.sidesArray.length
  }

  get perimeter(){
    let total = 0
    this.sidesArray.forEach(sideLength => total += sideLength)
    return total
  }

}

class Triangle extends Polygon{

  constructor(sidesArray){
    super(sidesArray);
  }

  get isValid(){
    const side1 = this.sidesArray[0]
    const side2 = this.sidesArray[1]
    const side3 = this.sidesArray[2]

    // console.log("triangle2 sidesArray[0] ⬇️");
    // console.log(this.sidesArray[0])
    // console.log("⬇️ super.countSides");
    // console.log(`${super.countSides}`);

    if (super.countSides === 3 &&
        side1 + side2 > side3 &&
        side2 + side3 > side1 &&
        side3 + side1 > side2){
      return true
    } else {
      return false
    }
  }

}

const triangle = new Triangle( [ 5, 5, 5 ] )
const triangle2 = new Triangle( [ 15, 10, 1 ] )

console.log(triangle.isValid)
console.log(triangle2.isValid)

class Square extends Polygon{

  constructor(sidesArray){
    super(sidesArray)
  }

  get isValid(){
    const side1 = this.sidesArray[0]
    const side2 = this.sidesArray[1]
    const side3 = this.sidesArray[2]
    const side4 = this.sidesArray[3]

    if(super.countSides === 4 &&
        side1 === side2 &&
        side1 === side3 &&
        side1 === side4){
      return true
    } else {
      return false
    }
  }

  get area(){
    return Math.pow(this.sidesArray[0],2)
  }

}
