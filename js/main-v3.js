// --- デバッグログ ---
console.log("main.js 最新版 v4 loaded");

// --- イントロ → ホーム遷移 ---
window.addEventListener('load', () => {
  if (document.body.classList.contains('intro-body')) {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 5000);
  }
});

// --- ハンバーガーメニュー開閉 ---
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');

  if (!menuBtn || !nav) return;

  // 開閉ボタン
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });

  // --- ページ切り替え時には必ず閉じる ---
  const closeMenu = () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('open');
  };

  // 通常ロード時
  window.addEventListener('load', closeMenu);

  // 履歴から戻った時（スマホSafari/Chrome対策）
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) closeMenu();
  });

  // メニューのリンクを押したら閉じる（これ重要！）
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});


