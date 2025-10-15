// 今はイントロ専用アニメーション制御だけ
// ここで後々ヘッダー遷移やエフェクト追加予定
document.addEventListener("DOMContentLoaded", () => {
  console.log("UMI Boxing Gym intro loaded!");
});

// index.html から home.html に数秒後に移動する
window.addEventListener('load', () => {
  // イントロを3秒表示してからHOMEへ
  setTimeout(() => {
    window.location.href = "home.html";
  },5000); // ← 秒数はここで調整（3000 = 3秒）
});
