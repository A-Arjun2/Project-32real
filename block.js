class Block  {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.4,
            'friction':0,
            
        }
        this.visibility=225
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        
        if(this.body.speed<5){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER)
        fill("blue");
        rect(0,0,this.width,this.height)
        pop();
    }else{
        World.remove(world, this.body)
        push()
        this.visibility=this.visibility-5
        pop()
    }
}

    score(){
        if (this.visibility<0 && this.visibility>-105){
          score++;
        }
    }
     
  
  };

  