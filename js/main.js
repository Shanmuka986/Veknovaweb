document.addEventListener('DOMContentLoaded', function() {
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
});

