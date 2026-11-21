// ===== Versi 3 — interaksi ringan =====

// Tahun di footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Bagian muncul saat masuk layar
const elemen = document.querySelectorAll(
  ".hero__text > *, .hero__photo, .title, .card, .tags li, .sticker--quote, .closing > *"
);

elemen.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = Math.min(i % 4, 3) * 80 + "ms";
});

const pengamat = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        pengamat.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
);

elemen.forEach((el) => pengamat.observe(el));