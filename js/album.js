// ライトボックス
new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});

// アニメーション
AOS.init({
  duration: 1000
});