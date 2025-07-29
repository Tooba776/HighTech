// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation
const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(e => e.textContent = '');

  // Name validation
  if (nameField.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  }

  // Email validation
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    valid = false;
  }

  // Message validation
  if (messageField.value.trim() === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    valid = false;
  }

  // Show success message
  if (valid) {
    document.getElementById('successMsg').textContent = 'Thank you for contacting us!';
    form.reset();
  } else {
    document.getElementById('successMsg').textContent = '';
  }
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
