document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add the visible class
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});


