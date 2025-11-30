document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterContent = document.getElementById('letterContent');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Open Envelope
    envelopeWrapper.addEventListener('click', () => {
        envelopeWrapper.classList.add('open');
        
        // Wait for animation to finish before showing full letter
        setTimeout(() => {
            envelopeWrapper.style.display = 'none';
            letterContent.style.display = 'block';
            // Small delay to allow display:block to apply before adding show class for transition
            setTimeout(() => {
                letterContent.classList.add('show');
            }, 50);
        }, 1500);
    });

    // Yes Button - Celebration
    yesBtn.addEventListener('click', () => {
        letterContent.innerHTML = '<h1>Yay! I Love You! ❤️</h1><p>Thank you for forgiving me. I promise to make it up to you!</p>';
        createConfetti();
    });

    // No Button - Run Away
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        // Keep it within the letter content area if possible, or just screen
        // Let's make it run away on the screen but relative to the button's current position to avoid jumping too far instantly?
        // Actually, random position on screen is funnier.
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    function createConfetti() {
        const colors = ['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -10 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});
