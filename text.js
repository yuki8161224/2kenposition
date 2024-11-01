const textContent = document.getElementById("textContent");

// Sample texts to display at each 25% scroll
const texts = [
    "遠い場所で起こった出来事とは無関係な人。普段と変わらぬ日々を歩む。積み重なった立方体は人の数だけあるそれぞれの日常。テレビから流れるショッキングなニュースもその日常の中に溶け込んでいく。",
    "起きた出来事の当事者に近い立場、何気ない日常はリズムを乱し、外装の時は綺麗に整っていた立方体も色を無くし崩れている。受けた混乱やショックを表すピンクと青の美術を抜けると徐々に当事者を思いやる気持ちが生まれ、色も柔らかくなっていく。しかしどんなに近い立場でも、どんなにその人に思いをはせても、当事者にしか分からないことがあり、美術を覆う白い糸の幕のように、直接触れることはできない。",
    "当事者の世界に足を踏み入れる。その光景を目の当たりにし、外装、エントランスで見たホールの映像は、実際とは異なるということに気がつく。 当事者になってはじめて見えて来るものがあり、切り取られた情報はほんの一部にすぎない。中央美術の内側にも、ホールに入らないと見えないものが隠れている。その中でもあなたはいまここで起きていることに向き合い続けている。",
    "3つの立場を体験したあなたには、現実世界がどのように見えるだろうか。私たちは日々、ある出来事に対してそれぞれの立場とどのように関わっていくのかを選択している。そして知らないうちに他人へと影響を与える。あなたが選んだアクリル板の色で、美術の見え方も、照らす色も変わる。自分の見方と他の人の見方。その集合体で成り立っているこの世界は、1人1人の選択で刻々と変わっていく。"
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
