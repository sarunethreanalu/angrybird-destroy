class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visibilty=255
  }
display (){
  if(this.body.speed<5){
    super.display()
  }
   else{
     World.remove(world,this.body)
     push()
     this.visibility=this.Visibility-5
     tint(255,this.Visibility)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     pop ()
   } 
  
}

};
