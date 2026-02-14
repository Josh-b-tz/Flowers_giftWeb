document.addEventListener('DOMContentLoaded', () => {
    // Star Generation
    const starsContainer = document.getElementById('stars-container');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random Position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random Size
        const size = Math.random() * 2 + 1; // 1px to 3px

        // Random Delay for twinkling
        const delay = Math.random() * 3;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }

    // Typing Text Effect
    const textElement = document.getElementById('typing-text');
    const fullText = `Ama y haz lo que quieras.\nSi callas, callarás con amor;\nsi corriges, corregirás con amor;\nSi perdonas, perdonarás con amor.\n\nDios siempre estará para ti, y yo lo intentaré también jaja`;

    // Config
    const typingSpeed = 50; // ms per char
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < fullText.length) {
            textElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
});
