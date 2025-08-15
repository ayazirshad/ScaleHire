document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const box = item.parentElement;
    let boxId = box.id;

    document.querySelectorAll(".image-card").forEach((img) => {
      if (img.classList.contains(boxId)) {
        img.classList.add("active-image");
      } else {
        img.classList.remove("active-image");
      }
      console.log("img.classList", img.classList);
    });

    document.querySelectorAll(".faq-box").forEach((faq) => {
      if (faq !== box) {
        faq.classList.remove("active");
      }
    });

    box.classList.toggle("active");
  });
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}

const menuBtn = document.getElementById("menuToggleBtn");
const menu = document.getElementById("mobileMenu");
const icon = document.getElementById("menuIcon");

let menuOpen = false;

if (menuBtn && menu && icon) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuOpen = !menuOpen;
    icon.src = menuOpen ? "./images/close.png" : "./images/menu.png";
  });
}

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) {
      t.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

// ________________faq ________________
const faq1 = document.getElementById("faq-1");
