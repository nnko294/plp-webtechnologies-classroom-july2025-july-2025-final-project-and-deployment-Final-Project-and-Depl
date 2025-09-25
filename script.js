// ==============================
// Show a section by ID with animation
// ==============================
function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
    section.style.display = "none";
  });

  // Show target with transition
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = "block"; // make visible
    setTimeout(() => {
      target.classList.add('active');
    }, 10); // tiny delay triggers CSS transition
  }
}

// ==============================
// Navigation between sections
// ==============================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    if (!page) return;

    // Update hash in URL
    window.location.hash = page;

    // Show selected section
    showPage(page);
  });
});

// ==============================
// Auto-load correct section on page load
// ==============================
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1); // remove #
  if (hash) {
    showPage(hash);
  } else {
    showPage('home'); // default
  }
});

// ==============================
// Handle back/forward browser buttons
// ==============================
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    showPage(hash);
  }
});

// ==============================
// Form submission handler
// ==============================
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();
  const responseBox = document.getElementById('response');

  if (!responseBox) return;

  if (name && email && message) {
    responseBox.innerText = `Thanks, ${name}! We'll get back to you soon.`;
    event.target.reset();
  } else {
    responseBox.innerText = 'Please fill out all fields.';
  }
}

// ==============================
// Mobile menu toggle
// ==============================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ==============================
// Image Slider (Gallery)
// ==============================
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });
}

// Optional: Auto-play every 5s
setInterval(() => {
  if (document.getElementById("gallery").classList.contains("active")) {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }
}, 5000);