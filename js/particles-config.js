// This file configures the particles for the hero section
window.addEventListener('load', () => {
    
    // Check if tsParticles is loaded
    if (typeof tsParticles === 'undefined') {
        console.error('tsParticles not loaded');
        return;
    }

    tsParticles.load("particles-js", {
        fullScreen: {
            enable: false // IMPORTANT: This keeps the particles in the hero section
        },
        background: {
            color: {
                value: "transparent" // Use the CSS gradient background
            }
        },
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff" // Particle color
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
                speed: 1, // Slow movement
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            },
            links: {
                enable: true, // This creates the "network" lines
                distance: 150, // Max distance to draw a line
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
                    mode: "grab" // Lines will be "grabbed" by the cursor
                },
                onclick: {
                    enable: true,
                    mode: "push" // Adds new particles on click
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
                    particles_nb: 4 // Number of particles to add on click
                }
            }
        },
        detectRetina: true
    });

});