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
});
// ───────────────
// FAQの開閉（＋−なしver）
// ───────────────

document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');
  if (questions.length > 0) {
    questions.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
      });
    });
  }
});

  




