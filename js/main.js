// 今はイントロ専用アニメーション制御だけ
// ここで後々ヘッダー遷移やエフェクト追加予定
document.addEventListener("DOMContentLoaded", () => {
  console.log("UMI Boxing Gym intro loaded!");
});

// index.html から home.html に数秒後に移動する
window.addEventListener('load', () => {
  // イントロを5秒表示してからHOMEへ
  setTimeout(() => {
    window.location.href = "home.html";
  },5000); // ← 秒数はここで調整（3000 = 3秒）
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}