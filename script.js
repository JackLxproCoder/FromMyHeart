document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const colors = ['#ffafbd', '#ffc3a0', '#d64161', '#ff9a9e', '#fad0c4'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.classList.add('heart');
        
        const size = Math.random() * 20 + 10;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        heart.style.left = `${posX}%`;
        heart.style.top = `${posY}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.color = color;
        heart.style.animation = `float ${duration}s infinite ${delay}s ease-in-out`;
        
        body.appendChild(heart);
    }
    
    const container = document.querySelector('.container');
    setInterval(() => {
        container.style.boxShadow = '0 15px 50px rgba(214, 65, 97, 0.3)';
        setTimeout(() => {
            container.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.2)';
        }, 1000);
    }, 5000);
});