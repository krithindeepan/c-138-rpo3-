function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup();

}

function draw() {
	game()
}
