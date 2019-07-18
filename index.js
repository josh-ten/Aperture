let COUNT = 50;
let innerDist = 100;
let outerDist = 180;
let innerPts = [];
let outerPts = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  for (let i = 0; i < COUNT; i++) {
    let inner = new Connector(true, null, i, 0);
    let outer = new Connector(false, inner, i, 0);
    innerPts.push(inner);
    outerPts.push(outer);
  }
}

function draw() {
  background(40);
  
  innerPts.forEach(p => p.spin(0.04));
  outerPts.forEach(p => p.spin(-0.003));
  
  innerPts.forEach(p => p.update());
  outerPts.forEach(p => {
    p.update();
    p.draw();
  });
  
  fill(0);
  noStroke();
  ellipse(width/2, height/2, innerDist*2, innerDist*2);
}