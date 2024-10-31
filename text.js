const textContent = document.getElementById("textContent");

// Sample texts to display at each 25% scroll
const texts = [
    "あ".repeat(100),
    "い".repeat(100),
    "う".repeat(100),
    "え".repeat(100)
];

let currentIndex = 0;
let isFading = false;

window.addEventListener("scroll", () => {
    if (isFading) return; // Prevent multiple fades during transition

    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / totalHeight;

    // Determine the new text index based on 25% intervals
    const textIndex = Math.min(Math.floor(scrollPercentage * 4), 3);

    if (textIndex !== currentIndex) {
        currentIndex = textIndex;
        isFading = true;

        // Fade out, update text, then fade in
        textContent.style.opacity = 0;

        textContent.addEventListener("transitionend", function handleFade() {
            // Update text after fade-out
            textContent.innerText = texts[textIndex];
            textContent.style.opacity = 1;

            // Once fade-in is complete, allow further changes
            textContent.addEventListener("transitionend", function fadeInComplete() {
                isFading = false;
                textContent.removeEventListener("transitionend", fadeInComplete);
            }, { once: true });

            // Remove this listener to prevent duplicate calls
            textContent.removeEventListener("transitionend", handleFade);
        }, { once: true });
    }
});
