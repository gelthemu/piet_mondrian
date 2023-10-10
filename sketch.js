let rectangles = [
	{ x: 450, y: 115, w: 900, h: 700 },
    { x: 470, y: 135, w: 150, h: 250 },
    { x: 640, y: 135, w: 690, h: 500 },
    { x: 470, y: 405, w: 150, h: 230 },
    { x: 470, y: 655, w: 500, h: 140 },
    { x: 990, y: 655, w: 100, h: 140 },
    { x: 1110, y: 655, w: 220, h: 33.3 },
    { x: 1110, y: 708.3, w: 220, h: 33.3 },
    { x: 1110, y: 761.6, w: 220, h: 33.3 }
  ];

let colors = [
    [255, 10, 102],
    [0, 102, 255],
    [153, 0, 153],
    [242, 242, 242],
    [0, 230, 230],
    [225, 51, 0],
    [255, 255, 102],
    [51, 153, 102],
	[10, 10, 35]
  ];

function setup() {
  createCanvas(1800, 930);
  noLoop();
  setInterval(changeColors, 200);
  changeColors();
}

function changeColors() {
  colors = [];
  for (let i = 0; i < rectangles.length; i++) {
    let randomColor = [random(255), random(255), random(255)];
    colors.push(randomColor);
  }
  redraw();
}

function draw() {
  background(255);
  
  for (let i = 0; i < rectangles.length; i++) {
    fill(colors[i]);
    rect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
  }
}
