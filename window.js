// clip要素の取得
const clipElement = document.querySelector('.clip');
const imageContainer = document.querySelector('.image-container-2');

// クリップマスクの初期設定
let maskSize = 15; // クリップマスクの初期サイズ（%）
const maxMaskSize = 80; // クリップマスクの最大サイズ（%）
const clipX = 80; // X座標を右から20%の位置に固定

// CSSでtransition効果を設定
clipElement.style.transition = 'clip-path 0.3s ease-out';

// スクロールイベントのリスナー
window.addEventListener('scroll', () => {
    // スクロール量を取得して、マスクサイズを増加
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // Y座標を画面の中心に固定
    const windowHeight = window.innerHeight; // 画面の高さを取得
    const centerY = windowHeight / 2; // 画面の中心Y座標を計算

    // スクロールの進行度に応じてmaskSizeを変化
    maskSize = Math.min(maxMaskSize, 15 + (scrollY / 200)); // 最大80%まで拡大

    // clipPathを更新
    clipElement.style.clipPath = `circle(${maskSize}% at ${clipX - (scrollX / 10)}% ${centerY + scrollY}px)`; // XとY座標をスクロールに連動

    // 影を追加（内側に）
    clipElement.style.boxShadow = 'inset 0 4px 8px rgba(255, 255, 255, 0.5)';
});

document.querySelector('.dli-caret-circle-fill-right').addEventListener('click', function () {
    const startScreen = document.getElementById('startScreen');
    startScreen.classList.add('fadeOut');

    // フェードアウト後に非表示にする
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 2000); // CSSのtransitionと同じ2秒後に非表示に
});

