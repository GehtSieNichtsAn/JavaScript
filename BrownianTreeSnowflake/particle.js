class Particle {

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.r = radius;
  }

  show() {
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    fill(179, 197, 226);
  }

  update() {
    this.x -= 1;
    this.y += random(-4, 4);
  }

  finished() {
    return (this.x <= 0);
  }

  intersects(others) {  
    for (var s of others) {
      var d = dist(this.x, this.y, s.x, s.y); 
      if (d < this.r * 2) {       
        return true;
      }
    }
    return false;
  }
}