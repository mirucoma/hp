// 画面内 100pxでclass追加
var window_h = $(window).height();
$(window).on("load scroll", function () {
  var scroll_top = $(window).scrollTop();
  $(".jsUnder").each(function () {
    //各box要素のtopの位置
    var elem_pos = $(this).offset().top;
    //タイミング
    if (scroll_top >= elem_pos - window_h + 100) {
      $(this).addClass("fadeIn"); //特定の位置を超えたらクラスを追加
    }
  });
});

$(function () {
  // ハンバーガーメニューの開閉
  $(".gnavi").on("click", function () {
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -767;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      // 自分が書いた場所　閉じる時の処理を書きましょう。
      $(this).removeClass("open");
      $("body").removeClass("active");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      // 自分が書いた場所
      $("body").toggleClass("active");
      $(this).addClass("open");
    }
    $("#global_nav").stop().animate(
      {
        right: rightVal,
      },
      300,
    );
  });

  //  アンカーリンクスムーススクロール
  $('a[href^="#"]').click(function () {
    var headerHeight = $("#header").height();
    var speed = 500;
    var offset = 60;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    if (window.matchMedia("(max-width: 300px)").matches) {
      var position = target.offset().top - headerHeight;
    } else {
      var position = target.offset().top - offset;
    }

    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(function () {
    $(".slider").slick({
      autoplay: true,
      dots: true,
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
    });
  });

  // アコーディオン
  $(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $(".s_02 .accordion_one .accordion_header").click(function () {
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next(".accordion_inner").slideToggle();
      $(this).toggleClass("open");
      //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
      $(".s_02 .accordion_one .accordion_header")
        .not($(this))
        .next(".accordion_one .accordion_inner")
        .slideUp();
      $(".s_02 .accordion_one .accordion_header")
        .not($(this))
        .removeClass("open");
    });
  });

  $(function () {
    $(".slider").slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 5000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 3, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1, //画面幅750px以下でスライド3枚表示
          },
        },
      ],
    });
  });

  var beforePos = 0; //スクロールの値の比較用の設定

  //スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
  function ScrollAnime() {
    var elemTop = $("#concept").offset().top;
    var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if (scroll == beforePos) {
      //IE11対策で処理を入れない
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
      //ヘッダーが上から出現する
      $(".headerBox").removeClass("UpMove"); //#headerにUpMoveというクラス名を除き
      $(".headerBox").addClass("DownMove"); //#headerにDownMoveのクラス名を追加
    } else {
      //ヘッダーが上に消える
      $(".headerBox").removeClass("DownMove"); //#headerにDownMoveというクラス名を除き
      $(".headerBox").addClass("UpMove"); //#headerにUpMoveのクラス名を追加
    }

    beforePos = scroll; //現在のスクロール値を比較用のbeforePosに格納
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
  });

  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on("load", function () {
    ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
  });

  $(function () {
    $(".js-modal-open").each(function () {
      $(this).on("click", function () {
        var target = $(this).data("target");
        var modal = document.getElementById(target);
        // 自分が書いた場所
        $("body").toggleClass("active");
        $(modal).fadeIn();
        return false;
      });
    });
    $(".js-modal-close").on("click", function () {
      // 自分が書いた場所 閉じた時の対処を書きましょう。
      $("body").removeClass("active");
      $(".js-modal").fadeOut();
      return false;
    });
  });
});
