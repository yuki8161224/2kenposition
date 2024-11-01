document.addEventListener('DOMContentLoaded', () => {
    const texts = ["Positon A -外装-", "Positon B -エントランス-", "Positon C -ホール-", "Positon D -アンケート-"];
    const textDisplay = document.getElementById('textDisplay');
    let currentIndex = 0; // 現在のインデックスを保持

    window.addEventListener('scroll', () => {
        const pageQuarter = document.documentElement.scrollHeight / 4;
        const index = Math.min(Math.floor(window.scrollY / pageQuarter), texts.length - 1);

        // インデックスが変わった場合のみ処理を実行
        if (index !== currentIndex) {
            currentIndex = index; // 現在のインデックスを更新

            // フェード効果を適用
            textDisplay.classList.add('fade');

            // 文字を変更する前にフェードアウトさせる
            setTimeout(() => {
                textDisplay.textContent = texts[currentIndex];
                textDisplay.classList.remove('fade');
            }, 500); // フェードアウトが終わるまでの時間（0.5秒）を待つ
        }
    });
});
