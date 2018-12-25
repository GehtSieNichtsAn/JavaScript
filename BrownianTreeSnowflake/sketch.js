var current;
var snowflake = [];
var radius;

function setup() {
  createCanvas(400, 400);

  radius = 5;  
  current = new Particle((width / 2 - 10), 0, radius);
}

function draw() {
  background(225);
  translate(width / 2, height / 2);

  var moved = false;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    moved = true;
  }

  if (!moved) {
    noLoop();
  }

  snowflake.push(current);
  current = new Particle((width / 2 - 10), 0, radius);

  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }

}