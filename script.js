// SHREYA.AI — Clean Interaction Script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '65px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#08080a';
      navLinks.style.padding = '20px 24px';
      navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      navLinks.style.gap = '16px';
    });
  }

  // Lookbook Filters
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.gallery-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Pre-fill campaign tier from pricing cards
function setSubject(campaignName) {
  const select = document.getElementById('packageSelect');
  if (select) {
    if (campaignName.includes('UGC')) select.value = 'ugc';
    else if (campaignName.includes('In-Feed')) select.value = 'infeed';
    else if (campaignName.includes('Ambassador')) select.value = 'ambassador';
  }
}

// Modal Inspector
function inspectPhoto(btn) {
  const card = btn.closest('.gallery-card');
  const img = card.querySelector('img').src;
  const tag = card.querySelector('.hover-tag').innerText;
  const title = card.querySelector('h4').innerText;
  const desc = card.querySelector('p').innerText;

  document.getElementById('modalImg').src = img;
  document.getElementById('modalCategory').innerText = tag;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;

  document.getElementById('photoModal').classList.add('open');
}

function closeModal(e) {
  document.getElementById('photoModal').classList.remove('open');
}

// Form Submission
function handleInquiry(e) {
  e.preventDefault();
  const brand = document.getElementById('brand').value;
  const email = document.getElementById('email').value;
  const pkg = document.getElementById('packageSelect').value;
  const brief = document.getElementById('brief').value;

  const status = document.getElementById('formStatus');
  status.innerHTML = `✓ Thank you, ${brand}. Your brief has been routed to <strong>mail@abhishekkumarproduct.co.in</strong>. Our team will contact you within 12 hours.`;

  // Create mailto link for direct launch
  const mailSubject = encodeURIComponent(`Brand Collaboration Brief: ${brand} (${pkg})`);
  const mailBody = encodeURIComponent(`Brand Name: ${brand}\nContact Email: ${email}\nPackage: ${pkg}\n\nCampaign Brief:\n${brief}`);
  
  // Reset form
  document.getElementById('contactForm').reset();
}
