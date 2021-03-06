class Hammer {
    constructor(x, y) {
      var options = {
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill(rgb(115,215,255))
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  