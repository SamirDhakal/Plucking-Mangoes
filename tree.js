class Tree {
    constructor(x, y) {
        var options= {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 450;
        this.height = 600;
        this.thickness = 10;
        this.image = loadImage("Plucking mangoes/tree.png");
        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        this.leftbody = Bodies.rectangle(0, this.y - this.height/2, this.thickness, this.height, {isStatic:false});
        this.rightbody = Bodies.rectangle(this.x + this.width/2, this.y - this.height/2, this.thickness, this.height, {isStatic:false});
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
    }
    display() {
        var pos = this.bottombody.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
    }
}