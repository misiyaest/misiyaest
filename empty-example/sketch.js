function setup() {
  // put setup code here
   createCanvas(600, 600);
 fill(256);
}

function draw() {
  // put drawing code here
  fill(random(256), 0, 0.50); //設定填滿的顏色為隨機的
 noStroke(); //設定不使用邊線
 ellipse(300, 300, random(600), random(600)); //畫圓形
}