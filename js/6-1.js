$(function () {
    function initializeScrollify() {
        var windowWidth = $(window).width(); // ウィンドウ幅を取得
        var scrollSpeed = 600; // デフォルトのスクロール速度を遅く

        // ウィンドウ幅に応じて異なる設定を適用
        if (windowWidth <= 500) {
            scrollSpeed = 600;
        } else if (windowWidth > 500 && windowWidth <= 1900) {
            scrollSpeed = 600;
        } else if (windowWidth > 1900 && windowWidth <= 2900) {
            scrollSpeed = 600;
        } else if (windowWidth > 2900 && windowWidth <= 4250) {
            scrollSpeed = 600;
        } else if (windowWidth > 4250) {
            scrollSpeed = 600;
        }

        // Scrollify初期化
        $.scrollify({
            section: ".box", // 1ページスクロールさせたいエリアクラス名
            scrollbars: "false", // スクロールバー表示・非表示設定
            interstitialSection: "#header,#footer", // ヘッダーフッターを認識し、1ページスクロールさせず表示
            easing: "swing", // easing設定
            scrollSpeed: scrollSpeed, // 動的に決定したスクロール速度を適用

            // ページが切り替わる前の処理
            before: function (i, panels) {
                var ref = panels[i].attr("data-section-name");
                $(".left-buttons .active").removeClass("active");
                $(".left-buttons").find("button[data-section='" + ref + "']").addClass("active");
            }
        });
    }

    // 左側にボタンを作成してセクションに移動する
    function createLeftButtons() {
        var buttons = "<div class=\"left-buttons\" style=\"position: fixed; left: 10px; top: 50%; transform: translateY(-50%);\">";
        $(".box").each(function (i) {
            var sectionName = $(this).attr("data-section-name");
            buttons += "<button style=\"display: block; margin: 10px 0; padding: 10px 20px;\" data-section=\"" + sectionName + "\">" + sectionName.charAt(0).toUpperCase() + sectionName.slice(1) + "</button>";
        });
        buttons += "</div>";

        $("body").append(buttons);

        // 各ボタンにクリックイベントを追加してセクションに移動
        $(".left-buttons button").on("click", function () {
            var section = $(this).attr("data-section");
            $.scrollify.move("#" + section);
        });
    }

    // 初回読み込み時にScrollifyを初期化し、左ボタンを作成
    initializeScrollify();
    createLeftButtons();

    // ウィンドウサイズが変更されたら再度Scrollifyを初期化
    $(window).resize(function () {
        $.scrollify.destroy(); // 現在の設定を解除
        initializeScrollify(); // 新しい設定で再初期化
    });
});
