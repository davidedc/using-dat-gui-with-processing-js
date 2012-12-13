int x;
int y;
float outerRad;
float innerRad;

void setup() {
  size(640, 360);
  background(204);
  x = width/2;
  y = height/2;
  outerRad = min(width, height) * 0.4;
  innerRad = outerRad * 0.6;
}

void draw() {
  background(204);
  
  int pts = int(map(mouseX, 0, width, 6, 60));
  float rot = window.angle;
  float angle = 0;
  
  beginShape(TRIANGLE_STRIP); 

   float px = x + cos(angle) * innerRad;
    float py = y + sin(angle) * innerRad;
    vertex(px, py);
    rect(px,py,5,5);

  for (int i = 0; i <= pts; i++) {
     px = x + cos(angle) * outerRad;
     py = y + sin(angle) * outerRad;
    angle += rot;
    vertex(px, py);
    px = x + cos(angle) * innerRad;
    py = y + sin(angle) * innerRad;
    vertex(px, py); 
    angle += rot;
  }

    angle -= rot/2;

    px = x + cos(angle) * outerRad;
     py = y + sin(angle) * outerRad;
    vertex(px, py);
    rect(px,py,5,5);
   endShape();

    rect(x,y,5,5);

}