class bob
{
	constructor(x,y,r)
	{
		var options={

			restitution: 1, 
			friction: 4.5, 
			frictionAir: 0.001, 
			frictionStactic :0,
			destiny : 0.6,
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
		this.image = loadImage("metal.png");
	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
			image(this.image, 0, 0, this.r, this.r);
			pop()
			
			
	}

}

