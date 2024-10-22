window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const parentElement = document.getElementById('parentElement'); // First row
    const parentElementReverse = document.getElementById('parentElementReverse'); // Second row
    const parentElementThird = document.getElementById('parentElementThird'); // Third row
    const parentElementFourth = document.getElementById('parentElementFourth'); // Fourth row
    const parentElementFifth = document.getElementById('parentElementFifth'); // Fifth row
    const parentElementSixth = document.getElementById('parentElementSixth'); // Sixth row
    const parentElementSeventh = document.getElementById('parentElementSeventh'); // Seventh row
    const parentElementEighth = document.getElementById('parentElementEighth'); // Eighth row
    const parentElementNinth = document.getElementById('parentElementNinth'); // Ninth row
    const parentElementTenth = document.getElementById('parentElementTenth'); // Tenth row
    const parentElementEleventh = document.getElementById('parentElementEleventh'); // Eleventh row
    const parentElementTwelfth = document.getElementById('parentElementTwelfth'); // Twelfth row

    const underparentElement = document.getElementById('underparentElement'); // First row
    const underparentElementReverse = document.getElementById('underparentElementReverse'); // Second row
    const underparentElementThird = document.getElementById('underparentElementThird'); // Third row
    const underparentElementFourth = document.getElementById('underparentElementFourth'); // Fourth row
    const underparentElementFifth = document.getElementById('underparentElementFifth'); // Fifth row
    const underparentElementSixth = document.getElementById('underparentElementSixth'); // Sixth row
    const underparentElementSeventh = document.getElementById('underparentElementSeventh'); // Seventh row
    const underparentElementEighth = document.getElementById('underparentElementEighth'); // Eighth row
    const underparentElementNinth = document.getElementById('underparentElementNinth'); // Ninth row
    const underparentElementTenth = document.getElementById('underparentElementTenth'); // Tenth row
    const underparentElementEleventh = document.getElementById('underparentElementEleventh'); // Eleventh row
    const underparentElementTwelfth = document.getElementById('underparentElementTwelfth'); // Twelfth row

    // Trigger animations for first 3 rows at 500px scroll
    if (scrollY >= 500) {
        parentElement.classList.add('animate-x'); // First row moves to the right
        parentElementReverse.classList.add('animate-x-reverse'); // Second row moves to the left
        parentElementThird.classList.add('animate-x'); // Third row moves to the right
        underparentElement.classList.add('animate-x'); // First row moves to the right
        underparentElementReverse.classList.add('animate-x-reverse'); // Second row moves to the left
        underparentElementThird.classList.add('animate-x'); // Third row moves to the right
    }

    // Trigger animations for next 3 rows at 1180px scroll (500 + 680)
    if (scrollY >= 1900) {
        parentElementFourth.classList.add('animate-x-reverse'); // Fourth row moves to the left
        parentElementFifth.classList.add('animate-x'); // Fifth row moves to the right
        parentElementSixth.classList.add('animate-x-reverse'); // Sixth row moves to the left
        underparentElementFourth.classList.add('animate-x-reverse'); // Fourth row moves to the left
        underparentElementFifth.classList.add('animate-x'); // Fifth row moves to the right
        underparentElementSixth.classList.add('animate-x-reverse'); // Sixth row moves to the left
    }

    // Trigger animations for next 3 rows at 1860px scroll (1180 + 680)
    if (scrollY >= 2900) {
        parentElementSeventh.classList.add('animate-x'); // Seventh row moves to the right
        parentElementEighth.classList.add('animate-x-reverse'); // Eighth row moves to the left
        parentElementNinth.classList.add('animate-x'); // Ninth row moves to the right
        underparentElementSeventh.classList.add('animate-x'); // Seventh row moves to the right
        underparentElementEighth.classList.add('animate-x-reverse'); // Eighth row moves to the left
        underparentElementNinth.classList.add('animate-x'); // Ninth row moves to the right
    }

    // Trigger animations for the last 3 rows at 2540px scroll (1860 + 680)
    if (scrollY >= 4250) {
        parentElementTenth.classList.add('animate-x-reverse'); // Tenth row moves to the left
        parentElementEleventh.classList.add('animate-x'); // Eleventh row moves to the right
        parentElementTwelfth.classList.add('animate-x-reverse'); // Twelfth row moves to the left
        underparentElementTenth.classList.add('animate-x-reverse'); // Tenth row moves to the left
        underparentElementEleventh.classList.add('animate-x'); // Eleventh row moves to the right
        underparentElementTwelfth.classList.add('animate-x-reverse'); // Twelfth row moves to the left
    }

    // Remove animations if scrolling back below 500px
    if (scrollY < 500) {
        parentElement.classList.remove('animate-x');
        parentElementReverse.classList.remove('animate-x-reverse');
        parentElementThird.classList.remove('animate-x');
        underparentElement.classList.remove('animate-x');
        underparentElementReverse.classList.remove('animate-x-reverse');
        underparentElementThird.classList.remove('animate-x');
    }

    // Remove animations if scrolling back below 1180px
    if (scrollY < 1180) {
        parentElementFourth.classList.remove('animate-x-reverse');
        parentElementFifth.classList.remove('animate-x');
        parentElementSixth.classList.remove('animate-x-reverse');
        underparentElementFourth.classList.remove('animate-x-reverse');
        underparentElementFifth.classList.remove('animate-x');
        underparentElementSixth.classList.remove('animate-x-reverse');
    }

    // Remove animations if scrolling back below 1860px
    if (scrollY < 1860) {
        parentElementSeventh.classList.remove('animate-x');
        parentElementEighth.classList.remove('animate-x-reverse');
        parentElementNinth.classList.remove('animate-x');
        underparentElementSeventh.classList.remove('animate-x');
        underparentElementEighth.classList.remove('animate-x-reverse');
        underparentElementNinth.classList.remove('animate-x');
    }

    // Remove animations if scrolling back below 2540px
    if (scrollY < 2540) {
        parentElementTenth.classList.remove('animate-x-reverse');
        parentElementEleventh.classList.remove('animate-x');
        parentElementTwelfth.classList.remove('animate-x-reverse');
        underparentElementTenth.classList.remove('animate-x-reverse');
        underparentElementEleventh.classList.remove('animate-x');
        underparentElementTwelfth.classList.remove('animate-x-reverse');
    }
});



const horizontalImage = document.getElementById('horizontal-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // 現在のスクロール位置
    const triggerPoint = 300; // 画像が表示され始めるスクロール位置

    if (scrollPosition < triggerPoint) {
        horizontalImage.style.opacity = 0; // 画像を2秒かけて表示
    } else {
        horizontalImage.style.opacity = 1; // 画像を非表示に戻す
    }
});