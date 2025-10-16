// イントロ→HOME遷移
window.addEventListener('load', () => {
  if (document.body.classList.contains('intro-body')) {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 5000);
  }
});

// ドロップダウンメニュー開閉
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-menu');

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // ページ遷移やロード時に閉じる
  window.addEventListener('pageshow', () => nav.classList.remove('active'));
  window.addEventListener('load', () => nav.classList.remove('active'));
});



