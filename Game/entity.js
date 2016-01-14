var Entity = function(x, y, width, height, bitmap) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = 2.5;
	this.bitmap = bitmap;
};
Entity.prototype.collideWith = function() {
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

    for (var each in blocks) {
        if (collideWith(this, blocks[each])) {
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
