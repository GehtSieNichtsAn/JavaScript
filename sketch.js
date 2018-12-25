var tree = [];

function setup() {
  createCanvas(400, 400);

  var x = createVector(width / 2, height);
  var y = createVector(width / 2, height - 100);
  var root = new Branch(x, y);
  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length-1; i >= 0 ; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
}

function draw() {
  background(220);
  stroke(0);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}