class BaseClass{
  constructor(x,y,w,h,angle){
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width=w;
      this.height=h;
      World.add(world,this.body);
  }
  display(){
      var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}