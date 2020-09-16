class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: polygon,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("poly.JPG")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
          
             strokeWeight(4);
             stroke(48,22,8);
             line (pointA.x,pointA.y, pointB.x,pointB.y);
             image (this.image, pointA.x,pointA.y-10,15,30);
        }
          pop();

    }
}

