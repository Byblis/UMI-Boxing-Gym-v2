// イントロ→HOME遷移
window.addEventListener('load', () => {
  if (document.body.classList.contains('intro-body')) {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 5000);
  }
});

// ================================
//   ドロップダウンメニュー開閉
// ================================
window.addEventListener("load", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-menu");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// ================================
//   FAQ 開閉
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");
  if (questions.length > 0) {
    questions.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("active");
      });
    });
  }
});

// ================================
//   現在ページのナビ強調
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const here = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-menu a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
});

// ================================
//   モーダル（画像・動画）
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mediaModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");

  const lockBody = () => {
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
  };
  const unlockBody = () => {
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  };

  document.querySelectorAll(".player-card").forEach((card) => {
    card.addEventListener("click", () => {
      const video = card.querySelector("video");
      const img = card.querySelector("img");

      modal.classList.add("active");
      lockBody();

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

  const closeModal = () => {
    modal.classList.remove("active");
    unlockBody();
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalImg.removeAttribute("src");
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});

// ================================
// 🖱️ ドラッグで横スクロール
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".players-grid");
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  ["mouseleave", "mouseup"].forEach((event) =>
    slider.addEventListener(event, () => {
      isDown = false;
      slider.classList.remove("dragging");
    })
  );

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.3; // ← スクロール速度調整
    slider.scrollLeft = scrollLeft - walk;
  });
});





