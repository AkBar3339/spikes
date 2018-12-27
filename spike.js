class Spike 
{
    constructor(x, y, rotation) 
    {
        this.pos = createVector(x, y);
        this.velocity = createVector(0.0, 0.0);
        this.rotation = rotation;
        this.slideIn = false;
        this.slideOut = false;
    }

    show() 
    {
        const spikeSize = 30;
        noStroke();
        fill(176, 190, 197);
        switch (this.rotation)
        {
            case "Left":
                triangle(this.pos.x, this.pos.y, this.pos.x - spikeSize + 10, this.pos.y - spikeSize * 0.5, this.pos.x - spikeSize + 10, this.pos.y + spikeSize * 0.5);
                break;
            case "Right":
                triangle(this.pos.x, this.pos.y, this.pos.x + spikeSize - 10, this.pos.y - spikeSize * 0.5, this.pos.x + spikeSize - 10, this.pos.y + spikeSize * 0.5);
                break;
            case "Up":
                triangle(this.pos.x, this.pos.y, this.pos.x - spikeSize * 0.5, this.pos.y - spikeSize * 0.5 - 10, this.pos.x + spikeSize * 0.5, this.pos.y - spikeSize * 0.5 - 10);
                break;
            case "Down":
                triangle(this.pos.x, this.pos.y, this.pos.x - spikeSize * 0.5, this.pos.y + spikeSize * 0.5 + 10, this.pos.x + spikeSize * 0.5, this.pos.y + spikeSize * 0.5 + 10);
                break;
        }
    }

    update() 
    {
        if (this.pos.x < 39 && this.rotation == "Left" && this.slideIn)
        {
            this.pos.x += this.velocity.x;
        }
        if (this.pos.x > 0 && this.rotation == "Left" && this.slideOut)
        {
            this.pos.x += this.velocity.x;
        }
        if (this.pos.x > width - 39 && this.rotation == "Right" && this.slideIn)
        {
            this.pos.x += this.velocity.x;
        }
        if (this.pos.x < width && this.rotation == "Right" && this.slideOut)
        {
            this.pos.x += this.velocity.x;
        }
    }

    changeVelocity(velX) 
    {
        this.velocity.x = velX;
    }

    getSpikeX()
    {
        return this.pos.x;
    }

    getSpikePoints()
    {
        let x2;
        let y2;
        let y3;
        if (this.rotation == "Left")
        {
            x2 = this.pos.x - 20;
        }
        if (this.rotation == "Right")
        {
            x2 = this.pos.x + 20;
        }
        y2 = this.pos.y - 15;
        y3 = this.pos.y + 15;
        
        

        return {
            x1: this.pos.x,
            y1: this.pos.y,
            x2: x2,
            y2: y2,
            x3: x2,
            y3: y3
        }
    }

    changeState(IN, OUT) 
    {
        this.slideIn = IN;
        this.slideOut = OUT;
    }
}