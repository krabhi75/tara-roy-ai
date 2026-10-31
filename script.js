// Tara Roy Website Interactions & Smooth Scroll Handling

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = '#0a0b10';
      navLinks.style.padding = '24px';
      navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    });
  }

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 11, 16, 0.95)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'rgba(10, 11, 16, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Dynamic Console Welcome
  console.log("%c TARA ROY • VIRTUAL INFLUENCER ", "background: #00f2fe; color: #0a0b10; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;");
  console.log("Next-Gen Digital Human IP powered by Generative AI. Hosted in Gurgaon.");
});
