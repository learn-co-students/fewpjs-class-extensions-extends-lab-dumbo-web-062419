// Your code here

class Polygon {

  constructor(sides){
    this.sides = sides;
  }

  get countSides(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce(function(t, i){
      return t + i;
    });
  }
}

class Triangle extends Polygon {

  get isValid() {
    let result = false;
    if (this.sides.length === 3){
      let tri = this.sides.sort();
      if (tri[0]+tri[1] > tri[2]){
        result = true;
      }
    }
    return result;
  }
}


class Square extends Polygon {

  get area(){
    return this.sides[0] * this.sides[0];
  }

  get isValid() {
    let result = false;
    if (this.sides.length === 4){
      let sq = this.sides;
      if (sq[0] == sq[1] && sq[2] == sq[3]){
        result = true;
      }
    }
    return result;
  }

}
