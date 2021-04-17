class Ground{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic : true});
        World.add(world,this.body);
        this.h = h
        this.w = w
     
    }
    display(){
        var angle = this.body.angle
        push()
fill("blue")
rectMode(CENTER);
rotate(angle);
translate(this.body.position.x,this.body.position.y)
rect(0,0,this.w,this.h)
pop()
    }
}