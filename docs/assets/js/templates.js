
////////////////////////////////////////////////////////////////////
//  モジュールインクルード
$('header').load('header.html');
$('footer').load('footer.html');

////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// スクロールアニメーション
var window_h = $(window).height();
$(window).on("load scroll", function () {
  var scroll_top = $(window).scrollTop();
  $(".jsUnder").each(function () {
    //各box要素のtopの位置
    var elem_pos = $(this).offset().top;
    //タイミング
    if (scroll_top >= elem_pos - window_h + 100) {
      $(this).addClass("fadeIn");//特定の位置を超えたらクラスを追加
    }
  });
});
////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////
//  ロード時にクラス追加（スプラッシュページやmvなど）
$(window).on("load", function () {
  $(".jsTop").addClass("opacity");//特定の位置を超えたらクラスを追加
});
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
// ロード後○秒後にクラス追加する
$('.opening img').delay(1300).queue(function (next) {
  $(this).fadeOut(300);
  next();
});
////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// フッターでヘッダーをフェードアウトさせる
window.onscroll = function () {
  var check = window.pageYOffset;       //現在のスクロール地点 
  var docHeight = $(document).height();   //ドキュメントの高さ
  var dispHeight = $(window).height();    //表示領域の高さ
  var footerHeight = $("footer .footerWrap").height();    //表示領域の高さ

  if (check > docHeight - dispHeight - footerHeight) {   //判別式　500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
    $('.gnavi').fadeOut(500);	//1000 はフェードアウトの速度です。調整可
  } else {
    $('.gnavi').fadeIn(500);	//1000 はフェードインの速度です。調整可
  }
};
////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// IEにアナウンスする
$(function () {
  var ua = window.navigator.userAgent;
  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {
    $("body").css("display", "none")
    alert('お使いのブラウザにこちらのWEBサイトは対応しておりません。\nchromeまたはEdgeブラウザのご利用をお願い致します。');
  }
});
////////////////////////////////////////////////////////////////////













////////////////////////////////////////////////////////////////////
// タブレッドの時のビューポートの変更 その他の処理クラス追加など
var ua = navigator.userAgent.toLowerCase();
var isiPad = (ua.indexOf('ipad') > -1);
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
if (isiPad || isAndroidTablet) {
  $("meta[name='viewport']").attr('content', 'width=1240');
  // $(".centerSection").addClass("tablet");
  // $(".mv").addClass("tablet");
  // $(".scroll").css("display", "none");
}
////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////
// タブ切り替え
$(".switchBtn").on("click", function () {
  var $th = $(this).index();
  $(".switchBtn").removeClass("active");
  $(this).addClass("active");
  $(".switchContent").removeClass("show");
  $(".switchContent").eq($th).addClass("show");
});
//  CSS（フェードイン）
//  .switchContent{
//   opacity: 0;
//   display: none;
// }
// .switchContent.show{
//   display: block;
//   animation: 1s fade-in forwards;
// }
// @keyframes fade-in {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

////////////////////////////////////////////////////////////////////
$(function () {

});



////////////////////////////////////////////////////////////////////

// モーダル
// CSSは過去から
$(function () {
  var winScrollTop;
  $('.js_modal_open').each(function () {
    $(this).on('click', function () {
      //スクロール位置を取得
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById("modal");
      $(modal).fadeIn();
      $(".movie-wrap").addClass('show');
      $("#imgArea").addClass('show');
      $("#imgArea").attr("src", $(this).data("videoId"));
      return false;
    });
  });
  $('.js_modal_close').on('click', function () {
    $('.js_modal').fadeOut();
    $(".movie-wrap").removeClass('show');
    $("#imgArea").removeClass('show');
    $('#imgArea').attr('src', '');
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
    return false;
  });
});
