class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 10;
        this.color = 'red';
        this.speed = 7;
    }

    update() {
        this.y -= this.speed;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    hits(alien) {
        return this.x < alien.x + alien.width &&
               this.x + this.width > alien.x &&
               this.y < alien.y + alien.height &&
               this.y + this.height > alien.y;
    }
}
