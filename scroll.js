window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Get the vertical scroll position
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / documentHeight; // Fraction of scroll progress

    // Reference all elements
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

        if (scrollFraction >= (index * 0.0833) && scrollFraction < ((index + 1) * 0.0833)) {
            element.classList.add(addClass);
            element.classList.remove(removeClass);
            underElement.classList.add(addClass);
            underElement.classList.remove(removeClass);
        } else {
            element.classList.remove(addClass);
            element.classList.remove(removeClass);
            underElement.classList.remove(addClass);
            underElement.classList.remove(removeClass);
        }
    });
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