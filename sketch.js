let walls = [];
let spikePatternRight;
let spikePatternLeft;
let spikesU = [];
let spikesD = [];
let bird;
let score = 0;

function setup() 
{
	let canvas = createCanvas(500, 900);
	canvas.parent("main");
	walls[0] = new Wall(0, 0, width, 20);
	walls[1] = new Wall(0, 20, 20, height - 40);
	walls[2] = new Wall(width - 20, 20, 20, height - 40);
	walls[3] = new Wall(0, height - 20, width, 20);

	score = 0;

	for (let i = 1; i <= 11; i++) 
	{
		spikesU[i - 1] = new Spike(40 * i + 10, 40, "Up");
		spikesD[i - 1] = new Spike(40 * i + 10, height - 40, "Down");
	}
	
	bird = new Bird();
}

function draw() 
{
	background(51);

	for (wall of walls) 
	{
		wall.show();
	}
	for (spike of spikesU) 
	{
		spike.show();
	}
	for (spike of spikesD) 
	{
		spike.show();
	}

	drawScore();

	bird.move();
	bird.show();
	bird.gravity();

	if (spikePatternRight != undefined) 
	{
		spikePatternRight.show();
	}
	if (spikePatternLeft != undefined)
	{
		spikePatternLeft.show();
	}

}

function drawScore() 
{
	noStroke();
	fill(176, 190, 197);
	ellipse(width * 0.5, height * 0.5, 180)
	textSize(90);
	fill(51);
	textAlign(CENTER, CENTER)
	text(score, width * 0.5, height * 0.5)
}

function keyPressed() 
{
	if (keyCode === UP_ARROW)
	{
		if (bird.gameIsOn == true)
		{
			bird.jmp();
		}
		else 
		{
			walls = [];
			spikePatternRight = undefined;
			spikePatternLeft = undefined;
			spikesU = [];
			spikesD = [];
			bird = undefined;
			setup();
		}
	}
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);