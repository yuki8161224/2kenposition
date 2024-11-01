const textContent = document.getElementById("textContent2");

// 表示するテキストのリスト
const texts = [
    "Position A -外装-",
    "Position B -エントランス-",
    "Position C -ホール-",
    "Position D -アンケート-"
];

let currentIndex = 0;
let isFading = false;

window.addEventListener("scroll", () => {
    if (isFading) return; // アニメーション中はスキップ

    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / totalHeight;

    // ページの4分の1ごとにテキストを変更
    const textIndex = Math.min(Math.floor(scrollPercentage * 4), 3);

    if (textIndex !== currentIndex) {
        currentIndex = textIndex;
        isFading = true;

        // フェードアウト、テキスト変更、フェードイン
        textContent.style.opacity = 0;

        textContent.addEventListener("transitionend", function handleFadeOut() {
            textContent.innerText = texts[textIndex];
            textContent.style.opacity = 1;

            textContent.addEventListener("transitionend", function handleFadeIn() {
                isFading = false;
                textContent.removeEventListener("transitionend", handleFadeIn);
            }, { once: true });

            textContent.removeEventListener("transitionend", handleFadeOut);
        }, { once: true });
    }
});
