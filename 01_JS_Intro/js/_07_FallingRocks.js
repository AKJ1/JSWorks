function imgBank() {
    this.background = new Image();
    this.player = new Image();
    this.rock = [new Image(), new Image(), new Image(), new Image(), new image()];
    this.background.src = "images/FR/background.png";
    this.player.src = "images/FR/playerSmaller.png";
    for (var i = rock.length - 1; i >= 0; i--) {
        rock[i].src = ("images/FR/rock" + i + ".png");
    }
    var images = rock.length + 2;
    var loadedImages = 0;

    function loadedImage() {
        loadedImages++; {
            if (loadedImages == images) {
                window.init();
            }
        }
    }
    this.background.onload = function() {
        loadedImage();
    };
    this.player.onload = function() {
        loadedImage();
    };
    this.rock.onload = function() {
        loadedImage();
    };
}

function Drawable() {
    this.init = function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
}

function Player() {
    this.speed = 3;
    this.draw = function() {
        this.context.drawImage(imgBank.player, this.x, this.y);
    };
    this.move = function() {
        if (KEY_STATUS.left || KEY_STATUS.right) {
            this.context.clearRect(this.x, this.y, this.width, this.height);
            if (KEY_STATUS.left) {
                this.x -= this.speed;
                if (this.x <= 0) {
                    this.x = 0;
                }
            }
            if (KEY_STATUS.right) {
                this.x += this.speed;
                if (this.x >= this.canvas.width - this.width) {
                    this.x = this.canvas.width - this.width;
                }
            }
        }
        this.draw();
    };
}
Player.prototype = new Drawable();

function rockArray() {
    var objects = [];
    this.init = function() {
        if (Math.floor(Math.random() * 100) + 1 > 99) {
            this.spawnRock();
        }
    };
    this.spawnRock = function() {
        var rock = new Rock();
        rock = spawnRock(imgBank.rock[Math.floor(Math.random()) * imgBank.rock.length], Math.floor(Math.random() * this.canvas.width) + 1, 0 + rock.image.height, Math.floor((Math.random() * 5) + 1));
        objects.push(rock);
    };
}

function Rock() {
    this.spawnRock = function(image, x, y, speed) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.overlimit = false;
    };
    this.draw = function() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
        this.y += this.speed;
        if (this.y >= canvas.height + this.height) {
            this.clear(this);
        } else {
            this.context.drawImage(this.image, this.x, this.y);
        }
    };
    this.clear = function(obj) {
    	obj.image = null;
    	obj.x = null;
    	obj.y = null;
    	obj.speed = null;
    };
}