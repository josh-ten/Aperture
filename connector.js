class Connector {
  constructor(inner, partner, index, rotation) {
    this.inner = inner;
    this.partner = partner;
    this.index = index;
    this.rotation = rotation;
    this.pos = this.calcPos();
  }
  
  update() {
    this.pos = this.calcPos();  
  }
  
  draw() {
    stroke(255);
    if (this.partner) {
      strokeWeight(1);
      line(this.pos.x, this.pos.y, 
           this.partner.pos.x, this.partner.pos.y);
    }
  }
  
  calcPos() {
    let center = createVector(width/2, height/2);
    let circlePortion = TWO_PI * this.index / COUNT;
    let offset = createVector(
      cos(circlePortion),
      sin(circlePortion)
    );
    offset.rotate(this.rotation);
    offset.mult(this.inner?innerDist:outerDist);
    let pos = center.add(offset);
    return pos;
  }
  
  spin(amount) {
    this.rotation += amount; 
  }
}