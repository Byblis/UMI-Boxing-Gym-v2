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

  // 現在のページURLを取得して、対応するナビメニューを強調表示
document.addEventListener("DOMContentLoaded", () => {
  const here = location.pathname.split('/').pop(); // 現在のファイル名（例：videos.html）
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === here) {
      a.classList.add('active');
    }
  });
});

// ================================
// 🎥 画像・動画のモーダル表示
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mediaModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");

  // 各 player-card のクリックで拡大
  document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", () => {
      const video = card.querySelector("video");
      const img = card.querySelector("img");
      
      modal.classList.add("active");
      
      if (video) {
        modalVideo.src = video.querySelector("source").src;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
      } else if (img) {
        modalImg.src = img.src;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
      }
    });
  });

  // ✨ 閉じるボタン または モーダル背景クリックで閉じる
  const closeModal = () => {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalImg.removeAttribute("src");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // 背景クリックで閉じる
  });

  // 🎯 再クリックでも閉じる
  modal.addEventListener("click", closeModal);
});

// ================================
// 🎥 画像・動画のモーダル表示（スマホ対応版）
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mediaModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");

  // 各 player-card のクリックで拡大
  document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", () => {
      const video = card.querySelector("video");
      const img = card.querySelector("img");
      
      modal.classList.add("active");
      
      if (video) {
        // 🔧 モバイル対応（currentSrc優先）
        const src = video.currentSrc || video.src || (video.querySelector("source")?.src);
        modalVideo.src = src;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.play().catch(()=>{}); // 自動再生制限対策
      } else if (img) {
        modalImg.src = img.src;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
      }
    });
  });

  // ✨ 閉じる処理（×ボタン・背景・再クリック）
  const closeModal = () => {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalImg.removeAttribute("src");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mediaModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");

  // カードクリックでモーダル表示
  document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", () => {
      const video = card.querySelector("video");
      const img = card.querySelector("img");

      modal.classList.add("active");
      document.body.classList.add("modal-open"); // ← 背景固定！

      if (video) {
        modalVideo.src = video.querySelector("source").src;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
      } else if (img) {
        modalImg.src = img.src;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
      }
    });
  });

  // 閉じるボタンまたは背景クリックで閉じる
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open"); // ← 背景解除！
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalImg.removeAttribute("src");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});



