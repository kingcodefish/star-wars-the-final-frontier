// collideWith Function we can use for the game if it's 2D

// Use camera method
var e = 0,
    f = 0;
    
var Block = {
    x: null,
    y: null,
    width: null,
    height: null,
    draw: function() {
        fill(130);
        rect(this.x, this.y, this.width, this.height);
    }
};
// Define collideWith Function
var collideWith = function(object1, object2) {
    return (object1.x + object1.width > object2.x &&
        object1.x + 1 < object2.x + object2.width &&
        object1.y + object1.height > object2.y &&
        object1.y < object2.y + object2.height);
};

var blocks = [new Block(e+200, f+175, 40, 40), new Block(e+300, f+200, 40, 40)];

// The Entity Class is a unique class that is extended in Player and Enemy
var Entity = function(x, y, width, height, bitmap) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = 2.5;
	this.bitmap = bitmap;
};
Entity.prototype.draw = function() {
	image(this.bitmap, this.x, this.y);
};

var Player = function(x, y, width, height, speed, bitmap) {
	Object.call(this, x, y, width, height, speed, bitmap);
};
Player.prototype = Object.create(Entity.prototype);
Player.prototype.update = function() {
    if (keys[RIGHT]) {
        this.x += this.speed;
    }
    if (keys[LEFT]) {
        this.x -= this.speed;
    }

    for (var i = 0; i < blocks.length; i++) {
        if (collideWith(this, blocks[i])) {
            if (keys[RIGHT]) {
                this.x -= this.speed;
            }
            if (keys[LEFT]) {
                this.x += this.speed;
            }
            break; // Collision was found. No need to continue checking
        }
    }

    if (keys[UP]) {
        this.y -= this.speed;
    }
    if (keys[DOWN]) {
        this.y += this.speed;
    }

    for (var i = 0; i < blocks; i++) {
        if (collideWith(this, blocks[i])) {
            if (keys[UP]) {
                this.y += this.speed;
            }
            if (keys[DOWN]) {
                this.y -= this.speed;
            }
            break;
        }
    }
};

// Create a new Instance of the Player Object

var x = 0,
    y = 0;

var objectX = 170;
var objectY = 200;
var pointAt;

var player = new Player(x + -15, y + -20, 40, 40);
noStroke();
    
var speed = 5;

angleMode = "degrees"; 

draw = function() {
    textAlign(CENTER, CENTER);
    cursor("none");
    background(255, 255, 255);

    player.update();
    player.draw();

    for (i = 0; i < blocks; i++) {
        blocks[i].draw();
    }
    
    if (keys[LEFT]) {
        e += speed;
    } else {
        e += 0;
    }

    if (keys[UP]) {
        f += speed;
    } else {
        f += 0;
    }

    if (keys[RIGHT]) {
        e += -speed;
    } else {
        e += 0;
    }

    if (keys[DOWN]) {
        f += -speed;
    } else {
        f += 0;
    }
    
    constrain(speed, 0, 20);
};
