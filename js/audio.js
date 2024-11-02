document.addEventListener('scroll', function () {
    const music = document.getElementById('backgroundMusic');
    const scrollPosition = window.scrollY; // スクロール位置を取得
    const scrollFraction = scrollPosition / documentHeight;

    if (scrollFraction < 0.25) {
        music.src = 'audio/415_BPM120.mp3';
    } else if (scrollFraction >= 0.25 && scrollFraction < 0.5) {
        music.src = 'audio/dokudoku.mp3';
    } else if (scrollFraction >= 0.5 && scrollFraction < 0.75) {
        music.src = 'audio/415_BPM120.mp3';
    } else {
        music.src = 'audio/dokudoku.mp3';
    }


    // 音楽の再生を強制的に行うためにloadメソッドを呼び出す
    music.load();
    music.play();
});
