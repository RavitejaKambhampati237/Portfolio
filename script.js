// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Add dynamic particle effect on mouse move
document.addEventListener("mousemove", function (e) {
  const cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.width = "4px";
  cursor.style.height = "4px";
  cursor.style.background = "rgba(102, 126, 234, 0.6)";
  cursor.style.borderRadius = "50%";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "9999";
  cursor.style.animation = "fadeOut 1s ease-out forwards";

  document.body.appendChild(cursor);

  setTimeout(() => {
    cursor.remove();
  }, 1000);
});

// Add fadeOut animation for cursor trail
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
document.head.appendChild(style);

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  const originalText = heroTitle.textContent;
  typeWriter(heroTitle, originalText, 80);
});

// Add scroll-based navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add parallax effect to background orbs
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const orbs = document.querySelectorAll(".bg-orb");

  orbs.forEach((orb, index) => {
    const speed = 0.1 + index * 0.05;
    orb.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});

// Add interactive hover effects for skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)";
    this.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
  });

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "none";
  });
});

// Add floating animation to contact items
document.querySelectorAll(".contact-item").forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
  item.classList.add("fade-in-up");
});

// Add click ripple effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add 3D tilt effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
});
