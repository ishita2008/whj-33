class Snowfall{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            density:1.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("snow4.webp")
        this.width=width
        this.height=height
       
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)

        if(this.body.position.y>height){
        
    
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
        }
    }

}