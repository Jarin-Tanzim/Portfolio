// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close nav on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="message"]').value;
    console.log({ name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Typewriter Effect
const rolesList = ["Front-End Developer", "Entrepreneur", "Content Creator"];
let roleIndex = 0;
let charIdx = 0;
let typing = true;

function typeEffect() {
  const role = rolesList[roleIndex];
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;

  if (typing) {
    typewriter.textContent = role.slice(0, ++charIdx);
    if (charIdx === role.length) {
      typing = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typewriter.textContent = role.slice(0, --charIdx);
    if (charIdx === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % rolesList.length;
    }
  }
  setTimeout(typeEffect, typing ? 100 : 60);
}
typeEffect();

// Animate Skill Bars on Scroll (optional if you use progress bars)
const skillBars = document.querySelectorAll('.skill-level');
function animateSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.dataset.level || bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Intersection Observer (basic trigger)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      if (entry.target.id === 'skills') animateSkillBars();
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
// Skill Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filter = button.dataset.filter;
    
    // Filter skills
    skillCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});