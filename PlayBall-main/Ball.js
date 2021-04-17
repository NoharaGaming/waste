class Ball {
    constructor(x, y) {
      var options = {
        isStaric:false,  
        'restitution':0.3,
        friction:100.0,
        density:1.2

      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
    imageMode(CENTER);
      fill("green");
      image(ballImage,0, 0, this.radius,this.radius);
      pop();
    }
  };
 