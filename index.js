// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce((prev,curr)=> prev + curr,0);
  }

}

class Triangle extends Polygon{

  get isValid(){
    let valid = false;
    if(this.sides.length === 3){
      this.sides = this.sides.sort();
      if(this.sides[0]+ this.sides[1] > this.sides[2]){
        valid = true;
      }
    }
    return valid;
  }
}

class Square extends Polygon {

  get area(){
    return this.sides[0] * this.sides[0];
  }

  get isValid(){
    let valid = false;
    if(this.sides.length === 4){
      this.sides = this.sides;
      if(this.sides[0] == this.sides[1] && this.sides[2] == this.sides[3]){
        valid = true;
      }
  }
  return valid;
}
}
