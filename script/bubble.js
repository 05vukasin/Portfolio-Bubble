// Konfiguracija mehurića
const numBubbles = 5;
const container = document.querySelector('.gradients-container');

function randomColor() {
    const colors = [
        'rgba(18, 113, 255, 0.5)', 
        'rgba(221, 74, 255, 0.5)', 
        'rgba(100, 220, 255, 0.5)', 
        'rgba(200, 50, 50, 0.5)', 
        'rgba(180, 180, 50, 0.5)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createBubble(index) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 300 + 400; // Mehurići od 400 do 700px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.background = `radial-gradient(circle at center, ${randomColor()} 0, rgba(0, 0, 0, 0) 50%)`;
    container.appendChild(bubble);

    let angle = Math.random() * Math.PI * 2;
    let speed = 0.1 + Math.random() * 0.3; // Sporije kretanje
    let radius = 150 + Math.random() * 200; // Širi radijus kretanja
    let centerX = Math.random() * window.innerWidth;
    let centerY = Math.random() * window.innerHeight;

    function animateBubble() {
        angle += speed * 0.002; // Polako pomeranje
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        bubble.style.transform = `translate(${x}px, ${y}px)`;
        
        

        requestAnimationFrame(animateBubble);
    }
    
    animateBubble();
}

// Kreiranje mehurića
for (let i = 0; i < numBubbles; i++) {
    createBubble(i);
}

// Interaktivni mehurić koji prati miš
const interBubble = document.querySelector('.interactive');
let curX = 0, curY = 0, tgX = 0, tgY = 0;

function moveBubble() {
    curX += (tgX - curX) / 10; // Veće kašnjenje za prirodniji efekat
    curY += (tgY - curY) / 10;
    interBubble.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(moveBubble);
}

window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
});

moveBubble();
