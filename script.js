// Function to handle the scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it has become visible
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the exact bottom
    });

    // Attach observer to each element
    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});