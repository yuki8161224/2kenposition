window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / documentHeight; // Fraction of scroll progress

    // Check if we're near the bottom of the page
    const isAtBottom = (window.innerHeight + scrollY) >= document.documentElement.scrollHeight;

    const rows = [
        { parent: 'parentElement', underParent: 'underparentElement' },
        { parent: 'parentElementReverse', underParent: 'underparentElementReverse' },
        { parent: 'parentElementThird', underParent: 'underparentElementThird' },
        { parent: 'parentElementFourth', underParent: 'underparentElementFourth' },
        { parent: 'parentElementFifth', underParent: 'underparentElementFifth' },
        { parent: 'parentElementSixth', underParent: 'underparentElementSixth' },
        { parent: 'parentElementSeventh', underParent: 'underparentElementSeventh' },
        { parent: 'parentElementEighth', underParent: 'underparentElementEighth' },
        { parent: 'parentElementNinth', underParent: 'underparentElementNinth' },
        { parent: 'parentElementTenth', underParent: 'underparentElementTenth' },
        { parent: 'parentElementEleventh', underParent: 'underparentElementEleventh' },
        { parent: 'parentElementTwelfth', underParent: 'underparentElementTwelfth' },
    ];

    const animations = [
        { addClass: 'animate-x', removeClass: 'animate-x-reverse' },
        { addClass: 'animate-x-reverse', removeClass: 'animate-x' },
    ];

    // Trigger animations for rows based on quarters of the page scroll
    rows.forEach((row, index) => {
        const { parent, underParent } = row;
        const element = document.getElementById(parent);
        const underElement = document.getElementById(underParent);
        const { addClass, removeClass } = animations[index % 2];

        // Add classes when in range and if not at the bottom
        if (scrollFraction >= (index * 0.0833) && scrollFraction < ((index + 1) * 0.0833)) {
            element.classList.add(addClass);
            element.classList.remove(removeClass);
            underElement.classList.add(addClass);
            underElement.classList.remove(removeClass);
        } else if (!isAtBottom) { // Only remove if not at the bottom
            element.classList.remove(addClass);
            element.classList.remove(removeClass);
            underElement.classList.remove(addClass);
            underElement.classList.remove(removeClass);
        }
    });
});

// Fade in/out horizontal image based on scroll position
const horizontalImage = document.getElementById('horizontal-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = 300;

    // Only adjust opacity if not at the bottom
    if (scrollPosition < triggerPoint) {
        horizontalImage.style.opacity = 0;
    } else if (!isAtBottom) {
        horizontalImage.style.opacity = 1;
    }
});
