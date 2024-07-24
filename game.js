const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let spaceship;
let bullets = [];
let aliens = [];
let keys = {};
let score = 0;


document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

function gameLoop() {
    update();
    draw();
    drawScore();
    handleSpaceshipAlienCollision(); 
    requestAnimationFrame(gameLoop);
}

function update() {
    spaceship.update();
    bullets.forEach(bullet => bullet.update());
    aliens.forEach(alien => alien.update());
    handleCollisions();
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    spaceship.draw();
    bullets.forEach(bullet => bullet.draw());
    aliens.forEach(alien => alien.draw());
}

function handleCollisions() {
    bullets = bullets.filter(bullet => {
        let hit = false;
        aliens = aliens.filter(alien => {
            if (bullet.hits(alien)) {
                hit = true;
                score++;
                return false;
            }
            return true;
        });
        return !hit;
    });
}

function checkCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

function handleSpaceshipAlienCollision() {
    aliens.forEach((alien, index) => {
        if (checkCollision(spaceship, alien)) {
            console.log("Colisión detectada entre la nave y el alienígena");
            
            aliens.splice(index, 1); 
            // gameOver(); 
        }
    });
}

function drawScore() {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Score: ' + score, 8, 20);
}

function init() {
    spaceship = new Spaceship();
    for (let i = 0; i < 5; i++) {
        aliens.push(new Alien(100 + i * 150, 50));
    }
    gameLoop();
}

init();
