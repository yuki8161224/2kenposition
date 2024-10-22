// clip要素の取得
const clipElement = document.querySelector('.clip');
const imageContainer = document.querySelector('.image-container-1');

// クリップマスクの初期設定
const maskSize = 20; // クリップマスクのサイズ（%）
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
