class Spaceship {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 60;
        this.width = 50; // Puede necesitar ajuste basado en el tamaño del sprite
        this.height = 50; // Puede necesitar ajuste basado en el tamaño del sprite
        this.speed = 5;
        this.image = new Image();
        this.image.src = "sprites/starShip.png";
    }

    update() {
        if (keys['ArrowLeft'] && this.x > 0) {
            this.x -= this.speed;
        }
        if (keys['ArrowRight'] && this.x < canvas.width - this.width) {
            this.x += this.speed;
        }
        if (keys[' ']) {
            bullets.push(new Bullet(this.x + this.width / 2, this.y));
        }
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}