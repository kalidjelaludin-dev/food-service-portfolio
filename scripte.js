
// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.querySelector(".menu");
//   const navLinks = document.querySelector(".nav");

//   menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });
// });
// const navItems = document.querySelectorAll(".nav-links a");

// navItems.forEach(menu => {
//   menu.addEventListener("click", () => {
//     navItems.forEach(link => link.classList.remove("active"));
//     item.classList.add("active");
//   });
// });
const orderBtn = document.querySelector("#button");

if(orderBtn){
  orderBtn.addEventListener("click", () => {
    alert("Thank you for your order! 🍽️");
  });
}
// Navbar toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.createElement("button");
  navToggle.textContent = "☰ Menu";
  navToggle.classList.add("nav-toggle");

  const navbar = document.querySelector(".navbar");
  const navList = navbar.querySelector("ul");

  // Insert toggle button before nav list
  navbar.insertBefore(navToggle, navList);

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission feedback
document.querySelectorAll(".contact-form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Thank you! Your form has been submitted.");
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll("section, .about, .contact, .menu1, .menu2, .menu3, .menu4");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);