window.addEventListener('load', function() { // <-- THIS IS THE ONLY CHANGE
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Guard against running this script on a page without a nav toggle
    if (mobileNavToggle && navList) {
        // Toggle mobile navigation visibility
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
    }

    // --- Contact Form Logic (will run on contact.html) ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default browser submission
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');

            // Show a success message to the user
            alert(`Thank you for your message, ${name}! We will get back to you shortly.\n(This is a front-end demo)`);
            
            this.reset(); // Clear the form fields after submission
        });
    }

    // --- Launch Animation Logic (from index.html) ---
    const overlay = document.getElementById('launch-overlay');
    const mainContent = document.getElementById('main-content');
    
    const step1 = document.getElementById('step-1-prompt');
    const step2 = document.getElementById('step-2-countdown');
    const step3 = document.getElementById('step-3-animation');
    
    const launchButton = document.getElementById('launch-button');
    const countdownTimer = document.getElementById('countdown-timer');
    
    const scissors = document.getElementById('scissors');
    const ribbonLeft = document.getElementById('ribbon-left');
    const ribbonRight = document.getElementById('ribbon-right');

    if (overlay && launchButton) {
        launchButton.addEventListener('click', () => {
            // 1. Hide step 1, show step 2
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            
            let count = 10;
            countdownTimer.textContent = count;
            
            const interval = setInterval(() => {
                count--;
                countdownTimer.textContent = count;
                
                if (count <= 0) {
                    clearInterval(interval);
                    
                    // 2. Hide step 2, show step 3 (animation)
                    step2.classList.add('hidden');
                    step3.classList.remove('hidden');
                    
                    // 3. Start animation sequence
                    
                    // Scissors move up and appear
                    setTimeout(() => {
                        scissors.style.transform = 'translateY(0) rotate(90deg) scale(1.2)';
                        scissors.style.opacity = '1';
                    }, 100);

                    // Scissors "open"
                    setTimeout(() => {
                        scissors.style.transform = 'translateY(0) rotate(70deg) scale(1.3)';
                    }, 600); // 500ms after appearing

                    // Scissors "cut" (close)
                    setTimeout(() => {
                        scissors.style.transform = 'translateY(0) rotate(100deg) scale(1.2)';
                    }, 900); // 300ms to open

                    // Ribbon splits and scissors hide
                    setTimeout(() => {
                        ribbonLeft.style.transform = 'translateX(-100%) rotate(-30deg)';
                        ribbonRight.style.transform = 'translateX(100%) rotate(30deg)';
                        ribbonLeft.style.opacity = '0';
                        ribbonRight.style.opacity = '0';
                        scissors.style.opacity = '0';
                        scissors.style.transitionDuration = '300ms'; // Faster hide
                    }, 1200); // 300ms after "cut"

                    // 4. Hide overlay, show content
                    setTimeout(() => {
                        overlay.classList.add('opacity-0');
                        mainContent.classList.remove('opacity-0');
                        
                        // Remove overlay from DOM after it fades
                        setTimeout(() => {
                            if (overlay) overlay.remove();
                        }, 1000); 
                    }, 2200); // 1s after ribbon split
                }
            }, 1000); // 1 second interval
        });
    } else {
        // Failsafe in case launch elements aren't on the page
        if(mainContent) mainContent.classList.remove('opacity-0');
        if(overlay) overlay.remove();
    }

    // --- Particles.js Logic (from particles-config.js) ---
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particles-js", {
            fullScreen: {
                enable: false
            },
            background: {
                color: {
                    value: "transparent"
                }
            },
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 2,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            detectRetina: true
        });
    } else {
        console.error('tsParticles not loaded, particles will not be initialized.');
    }
});