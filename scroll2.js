window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / documentHeight;

    const overlay = document.querySelector('.overlay');

    if (scrollFraction < 0.25) {
        overlay.className = 'overlay bg-yellow';
    } else if (scrollFraction >= 0.25 && scrollFraction < 0.5) {
        overlay.className = 'overlay bg-indigo';
    } else if (scrollFraction >= 0.5 && scrollFraction < 0.75) {
        overlay.className = 'overlay bg-red';
    } else {
        overlay.className = 'overlay bg-white';
    }
});
