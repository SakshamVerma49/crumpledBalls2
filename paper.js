class Paper {
    constructor(x, y, radius) {
      this.image = loadImage("paper.png");
      
      var options = {
          restitution:0.3,
          friction:0.5,
          density:0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.radius = radius;
        }

    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);

      fill(255,0,0); //133, 66, 44);
      // ellipseMode(RADIUS);
      // ellipse(0,0, this.radius, this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, 60, 60); 
      pop();
    }
  }