class Bird 
{
    constructor()
    {
        this.pos = createVector(width * 0.5, height * 0.5)
        this.velocity = createVector(3, 0);
        this.r = 40;
        this.gameIsOn = true;
        this.gravityIsOn = true;
        this.direction = "Right";
    }

    show() 
    {
        noStroke();
        fill(216, 27, 96);
        ellipse(this.pos.x, this.pos.y, this.r);
        
    }

    gravity()
    {
        const g = 0.19;
        if (this.velocity.y < 10 && this.gravityIsOn) 
        {
            this.velocity.y += g;
        }
    }

    move() 
    {
        this.hitWall();
        this.hit();
        this.hitWallSpike();
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    jmp() 
    {
        if (this.gameIsOn)
        {
            this.velocity.y -= 5;
            if (this.velocity.y < -6)
            {
                this.velocity.y = -6
            }
        }
    }

    hitWall() 
    {
        if (this.pos.x >= width - this.r && this.gameIsOn)
        {
            this.velocity.x *= -1;
            this.velocity.x += 0.01;
            score++;

            if (this.direction == "Right")
            {
                this.direction = "Left";
            }
            else 
            {
                this.direction = "Right";
            }

            spikePatternLeft = undefined;
            spikePatternLeft = new SpikePattern("Left");
            spikePatternLeft.slideIn();
            if (spikePatternRight != undefined) 
            {
                spikePatternRight.slideOut();
            }
        }
        else if (this.pos.x <= this.r && this.gameIsOn) 
        {
            this.velocity.x *= -1;
            this.velocity.x += 0.01;
            score++;

            spikePatternRight = undefined;
            spikePatternRight = new SpikePattern("Right");
            spikePatternRight.slideIn();
            spikePatternLeft.slideOut();
        }
    }

    hit()
    {
        if (this.pos.y > height - this.r - 20) 
        {
            this.velocity.y = 5;
            this.velocity.x = 0;
            this.gameIsOn = false;
            if (this.pos.y > height - this.r)
            {
                this.velocity.y = 0;
                this.gravityIsOn = false;
            }
        }
        else if (this.pos.y < this.r + 20) 
        {
            if (this.gameIsOn)
            {
                this.velocity.y = 0;
                this.velocity.x = 0;
            }
            this.gameIsOn = false;
        }
    }

    hitWallSpike() 
    {
        if (this.direction == "Left" && spikePatternLeft != undefined && this.pos.x <= 70)
        {
            for (spike of spikePatternLeft.spikes)
            {
                const spikePoints = spike.getSpikePoints();
                if(collideLineCircle(spikePoints.x1, spikePoints.y1, spikePoints.x2, spikePoints.y2, this.pos.x, this.pos.y, this.r) || 
                    collideLineCircle(spikePoints.x1, spikePoints.y1, spikePoints.x3, spikePoints.y3, this.pos.x, this.pos.y, this.r))
                {
                    if (this.gameIsOn)
                        {
                            this.velocity.y = 0;
                            this.velocity.x = 0;
                        }
                    this.gameIsOn = false;
                }
            }
        }
        if (this.direction == "Right" && spikePatternRight != undefined && this.pos.x >= width - 70)
        {
            for (spike of spikePatternRight.spikes)
            {
                const spikePoints = spike.getSpikePoints();
                if(collideLineCircle(spikePoints.x1, spikePoints.y1, spikePoints.x2, spikePoints.y2, this.pos.x, this.pos.y, this.r) || 
                    collideLineCircle(spikePoints.x1, spikePoints.y1, spikePoints.x3, spikePoints.y3, this.pos.x, this.pos.y, this.r))
                {
                    if (this.gameIsOn)
                        {
                            this.velocity.y = 0;
                            this.velocity.x = 0;
                        }
                    this.gameIsOn = false;
                }
            }
        }
    }
}