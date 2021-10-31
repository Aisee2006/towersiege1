class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("ground.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,20,30, this.width, this.height);
    }
  }