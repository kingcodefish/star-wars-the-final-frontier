var collideWith = function(object1, object2) {
	return (object1.x + object1.width > object2.x &&
        object1.x + 1 < object2.x + object2.width &&
        object1.y + object1.height > object2.y &&
        object1.y < object2.y + object2.height);
};

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

var Player = function(x, y, width, height, bitmap) {
	Object.call(this, x, y, width, height, bitmap);
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
