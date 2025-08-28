// Blog Website JavaScript - Pixel Style Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation active state management
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Add pixel click effect
            addPixelEffect(this);
        });
    });
    
    // Pixel click effect
    function addPixelEffect(element) {
        const rect = element.getBoundingClientRect();
        const effect = document.createElement('div');
        
        effect.style.position = 'fixed';
        effect.style.left = rect.left + 'px';
        effect.style.top = rect.top + 'px';
        effect.style.width = rect.width + 'px';
        effect.style.height = rect.height + 'px';
        effect.style.background = 'black';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '9999';
        effect.style.opacity = '0.3';
        
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 100);
    }
    
    // Smooth scrolling for read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add pixel loading effect
            showPixelLoader();
            
            // Simulate loading
            setTimeout(() => {
                hidePixelLoader();
                // Here you would normally navigate to the full post
                console.log('Navigating to full post...');
            }, 1000);
        });
    });
    
    // Pixel loader
    function showPixelLoader() {
        const loader = document.createElement('div');
        loader.id = 'pixel-loader';
        loader.innerHTML = `
            <div class="pixel-loader-content">
                <div class="loading-text">LOADING...</div>
                <div class="loading-pixels">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        
        const loaderStyles = `
            #pixel-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                font-family: 'JetBrains Mono', monospace;
            }
            
            .pixel-loader-content {
                text-align: center;
                border: 2px solid black;
                padding: 30px;
                background: white;
                box-shadow: 4px 4px 0px black;
            }
            
            .loading-text {
                font-weight: 700;
                font-size: 16px;
                letter-spacing: 2px;
                margin-bottom: 20px;
            }
            
            .loading-pixels {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 4px;
                width: 60px;
                margin: 0 auto;
            }
            
            .loading-pixels span {
                width: 16px;
                height: 16px;
                background: black;
                animation: pixelPulse 1s infinite;
            }
            
            .loading-pixels span:nth-child(1) { animation-delay: 0s; }
            .loading-pixels span:nth-child(2) { animation-delay: 0.1s; }
            .loading-pixels span:nth-child(3) { animation-delay: 0.2s; }
            .loading-pixels span:nth-child(4) { animation-delay: 0.3s; }
            .loading-pixels span:nth-child(5) { animation-delay: 0.4s; }
            .loading-pixels span:nth-child(6) { animation-delay: 0.5s; }
            .loading-pixels span:nth-child(7) { animation-delay: 0.6s; }
            .loading-pixels span:nth-child(8) { animation-delay: 0.7s; }
            .loading-pixels span:nth-child(9) { animation-delay: 0.8s; }
            
            @keyframes pixelPulse {
                0%, 50% { opacity: 1; transform: scale(1); }
                25% { opacity: 0.3; transform: scale(0.8); }
                75% { opacity: 0.7; transform: scale(1.1); }
                100% { opacity: 1; transform: scale(1); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = loaderStyles;
        document.head.appendChild(styleSheet);
        
        document.body.appendChild(loader);
    }
    
    function hidePixelLoader() {
        const loader = document.getElementById('pixel-loader');
        if (loader) {
            loader.remove();
        }
    }
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                // Add blinking cursor effect
                const cursor = document.createElement('span');
                cursor.textContent = '█';
                cursor.style.animation = 'blink 1s infinite';
                heroTitle.appendChild(cursor);
                
                // Add blink animation
                const blinkStyle = document.createElement('style');
                blinkStyle.textContent = `
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `;
                document.head.appendChild(blinkStyle);
            }
        }, 100);
    }
    
    // Hover effects for post cards
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-2px, -2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
    
    // Social links pixel effects
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create pixel explosion effect
            createPixelExplosion(this);
            
            // Simulate social media opening
            setTimeout(() => {
                console.log('Opening social media:', this.textContent);
                // window.open(this.href, '_blank');
            }, 500);
        });
    });
    
    function createPixelExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const pixel = document.createElement('div');
            pixel.style.position = 'fixed';
            pixel.style.width = '4px';
            pixel.style.height = '4px';
            pixel.style.background = 'black';
            pixel.style.left = centerX + 'px';
            pixel.style.top = centerY + 'px';
            pixel.style.pointerEvents = 'none';
            pixel.style.zIndex = '9999';
            
            document.body.appendChild(pixel);
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 50;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            pixel.animate([
                { left: centerX + 'px', top: centerY + 'px', opacity: 1 },
                { left: endX + 'px', top: endY + 'px', opacity: 0 }
            ], {
                duration: 500,
                easing: 'ease-out'
            }).onfinish = () => {
                pixel.remove();
            };
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hidePixelLoader();
        }
        
        // Arrow key navigation for posts
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const posts = document.querySelectorAll('.post-card');
            const currentFocus = document.querySelector('.post-card:focus');
            let currentIndex = Array.from(posts).indexOf(currentFocus);
            
            if (e.key === 'ArrowDown') {
                currentIndex = (currentIndex + 1) % posts.length;
            } else {
                currentIndex = (currentIndex - 1 + posts.length) % posts.length;
            }
            
            posts[currentIndex].focus();
        }
    });
    
    // Make post cards focusable
    postCards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        if (index === 0) {
            card.focus();
        }
    });
    
    // Console pixel art welcome message
    console.log(`
    ██████╗ ██╗      ██████╗  ██████╗     ███████╗██╗  ██╗███████╗
    ██╔══██╗██║     ██╔═══██╗██╔════╝     ██╔════╝╚██╗██╔╝██╔════╝
    ██████╔╝██║     ██║   ██║██║  ███╗    █████╗   ╚███╔╝ █████╗  
    ██╔══██╗██║     ██║   ██║██║   ██║    ██╔══╝   ██╔██╗ ██╔══╝  
    ██████╔╝███████╗╚██████╔╝╚██████╔╝    ███████╗██╔╝ ██╗███████╗
    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝     ╚══════╝╚═╝  ╚═╝╚══════╝
    
    Selamat datang di Blog Minimalis dengan desain pixel!
    Website ini dibuat dengan HTML, CSS, dan JavaScript.
    `);
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}