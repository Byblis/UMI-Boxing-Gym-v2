console.log("main.js 最新版 v3"); // ←キャッシュ確認用

// --- イントロからホームへ遷移 ---
window.addEventListener('load', () => {
  if (document.body.classList.contains('intro-body')) {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 5000);
  }
});

// --- ハンバーガーメニュー制御 ---
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) {
    console.warn("ハンバーガーまたはnav-menuが見つからない");
    return;
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // ページ読み込み時や戻る時には閉じる
  const closeMenu = () => navMenu.classList.remove('open');
  window.addEventListener('pageshow', closeMenu);
  window.addEventListener('load', closeMenu);
});

