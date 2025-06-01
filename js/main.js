// ローディング
const loadingElement = document.querySelector('#loading');
window.addEventListener('load', () => {
  loadingElement.classList.add('loaded');
});


// ナビゲーション
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('.menu-item');
const menuLinks = document.querySelectorAll('#menu-panel a');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};
// メニューが開いているかどうかを判定
let isMenuOpen = false;

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['-100vw', 0]}, menuOptions);
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['-2rem', 0],
      },
      {
        duration: 2400,
        easing: 'ease',
        delay: index * 300,
        fill: 'forwards',
      }
    );
  });
  // ボタン切り替え（open → close）
  menuOpen.animate({ opacity: [1, 0] }, {
    ...menuOptions,
    duration: 300,
  }).onfinish = () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'inline-block';
    menuClose.animate({opacity: [0, 1]}, {
      ...menuOptions,
      duration: 300,
    });
  };
  // ホバーで伸びるライン
  menuLinks.forEach((menuLink) => {
    menuLink.classList.add('white-after');
  });
  isMenuOpen = true;
});

// メニューを閉じる
const closeAnimate = () => {
  menuPanel.animate({translate: [0, '-100vw']}, menuOptions);
  menuItems.forEach((menuItem, index) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
  // ボタン切り替え（close → open）
  menuClose.animate({opacity: [1, 0]}, {
    ...menuOptions,
    duration: 300,
  }).onfinish = () => {
    menuClose.style.display = 'none';
    menuOpen.style.display = 'inline-block';
    menuOpen.animate({opacity: [0, 1]}, {
      ...menuOptions,
      duration: 300,
    });
  };
  // ホバーで伸びるライン
  menuLinks.forEach((menuLink) => {
    menuLink.classList.remove('white-after');
  });
};
// ボタンを押したらメニューを閉じる
menuClose.addEventListener('click', () => {
  closeAnimate();
  isMenuOpen = false;
});
// リンクを押したらメニューを閉じる（SP表示のみ）
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      closeAnimate();
      isMenuOpen = false;
    }
  });
});

// 画面幅変更時
window.addEventListener('resize', () => {
  // SPメニューが開いている状態で画面幅がPCサイズになったらメニューを閉じる
  if (window.innerWidth > 768) {
    if (isMenuOpen) {
      closeAnimate();
      isMenuOpen = false;
    }
    // アニメーションをリセット
    menuItems.forEach((menuItem) => {
      menuItem.getAnimations().forEach(anim => anim.cancel());
      menuItem.style.opacity = 1;
    });
    menuPanel.getAnimations().forEach(anim => anim.cancel());
    menuPanel.style.translate = 0;
    // ホバーで伸びるライン
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove('white-after');
    });
  } else {
    menuItems.forEach((menuItem) => {
      menuItem.getAnimations().forEach(anim => anim.cancel());
      menuItem.style.opacity = 0;
    });
    menuPanel.getAnimations().forEach(anim => anim.cancel());
    menuPanel.style.translate = '-100vw';
    // ホバーで伸びるライン
    menuLinks.forEach((menuLink) => {
      menuLink.classList.add('white-after');
    });
  }
});
