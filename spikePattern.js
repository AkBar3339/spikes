class SpikePattern 
{
    constructor (side) 
    {
        this.side = side
        switch (this.side)
        {
            case "Left":
                this.spikes = [];
                for (let i = 1; i <= 21; i++)
	            {
                    let rand = random();
                    if (rand > 0.6)
                    {
		                this.spikes.push(new Spike(0, 40 * i + 10, "Left"));
                    }
	            }
                break;
            case "Right":
                this.spikes = [];
                for (let i = 1; i <= 21; i++)
                {
                    let rand = random();
                    if (rand > 0.6)
                    {
                        this.spikes.push(new Spike(width, 40 * i + 10, "Right"));
                    }
                }
                break;
        }
    }

    show()
    {
        if (this.spikes != undefined)
        {
            for (spike of this.spikes)
            {
                spike.update();
                spike.show();
            }
        }
    }

    slideIn() 
    {
        let v = 3;
        if (this.spikes[0].getSpikeX() < 40 && this.side == "Left")
        {
            for (spike of this.spikes)
            {
                spike.changeState(true, false);
                spike.changeVelocity(v)
            }
        }
        if (this.spikes[0].getSpikeX() > width - 40 && this.side == "Right")
        {
            for (spike of this.spikes)
            {
                spike.changeState(true, false);
                spike.changeVelocity(-v)
            }
        }
    }

    slideOut()
    {
        let v = 3;
        
        if (this.spikes[0].getSpikeX() > 0 && this.side == "Left")
        {
            for (spike of this.spikes)
            {
                spike.changeState(false, true);
                spike.changeVelocity(-v)
            }
        }
        if (this.spikes[0].getSpikeX() < width && this.side == "Right")
        {
            for (spike of this.spikes)
            {
                spike.changeState(false, true);
                spike.changeVelocity(v)
            }
        }
    }
}