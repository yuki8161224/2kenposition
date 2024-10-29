// clip要素の取得
const clipElement = document.querySelector('.clip');
const imageContainer = document.querySelector('.image-container-2');

// クリップマスクの初期設定
const maskSize = 30; // クリップマスクのサイズ（%）
const clipX = 80; // X座標を右から20%の位置に固定

// スクロールイベントのリスナー
window.addEventListener('scroll', () => {
    // スクロール量を取得
    const scrollY = window.scrollY;

    // Y座標を画面の中心に固定
    const windowHeight = window.innerHeight; // 画面の高さを取得
    const centerY = windowHeight / 2; // 画面の中心Y座標を計算

    // clipPathを更新
    clipElement.style.clipPath = `circle(${maskSize}% at ${clipX}% ${centerY + scrollY}px)`; // Y座標をスクロールに連動
});


document.getElementById('startButton').addEventListener('click', function () {
    const startScreen = document.getElementById('startScreen');
    startScreen.style.opacity = '0';

    // フェードアウト後に非表示にする
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 2000); // CSSのtransitionと同じ2秒後に非表示に
});

