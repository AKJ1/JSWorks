function imgBank(){
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
		loadedImages++;
		{
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
function Drawable () {
	this.init = function (x,y,width,height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};
}
function Ship () {
	this.speed = 3;
	this.draw = function(){
		this.context.drawImage(imgBank.player, this.x, this.y);
	};
	this.move = function(){

		if (KEY_STATUS.left || KEY_STATUS.right) {
			this.context.clearRect(this.x, this.y, this.width, this.height);
			if (KEY_STATUS.left) {
				this.x -= this.speed;
			}
			if (KEY_STATUS.right) {
				this.x += this.speed;
			}
		}
	};
}