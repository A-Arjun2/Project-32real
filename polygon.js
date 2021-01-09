class Polygon {
    constructor(x,y,width,height) {
        var options = {
         'isStatic':false,
          'density':1.2,
          'friction':0.5,
          'restitution':0.3
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
        
        
}
display(){
  var position =this.body.position;
  push()
  translate(position.x,position.y);
  image(this.image,0, 0,40,40);
  pop()
}

   }
