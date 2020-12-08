class Chain{
    constructor(body1,body2){
  var who = {
      bodyA:body1,
      bodyB:body2,
      stiffness:0.02,
      length:50
  }
  this.chain=Constraint.create(who);
    World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(6);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}