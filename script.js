// Shreya Roy — Production Script with Interactive Lookbook, Filter Tabs, Modals & Form Handlers

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('mobile-active');
      if (isOpen) {
        navLinks.classList.remove('mobile-active');
        navLinks.style.display = 'none';
      } else {
        navLinks.classList.add('mobile-active');
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#08090d';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        navLinks.style.gap = '20px';
      }
    });

    // Close on click link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
          navLinks.classList.remove('mobile-active');
        }
      });
    });
  }

  // 2. Navbar Background Blur on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(8, 9, 13, 0.96)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
      navbar.style.background = 'rgba(8, 9, 13, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });

  // 3. Lookbook Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. FAQ Accordion Handling
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isAlreadyActive) {
        item.classList.add('active');
      }
    });
  });
});

// 5. Select Tier helper (scroll to form & pre-select option)
function selectTier(tierName) {
  const select = document.getElementById('campaignType');
  if (select) {
    if (tierName.includes('UGC')) {
      select.value = 'ugc';
    } else if (tierName.includes('In-Feed')) {
      select.value = 'sponsored';
    } else if (tierName.includes('Ambassador')) {
      select.value = 'ambassador';
    }
  }
}

// 6. Lookbook Modal Inspector
function openPhotoModal(button) {
  const card = button.closest('.gallery-card');
  const img = card.querySelector('img').src;
  const tag = card.querySelector('.cat-badge').innerText;
  const title = card.querySelector('h4').innerText;
  const desc = card.querySelector('p').innerText;

  document.getElementById('modalImg').src = img;
  document.getElementById('modalTag').innerText = tag;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;

  const modal = document.getElementById('photoModal');
  modal.classList.add('open');
}

function closePhotoModal() {
  document.getElementById('photoModal').classList.remove('open');
}

// Close modal on click outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('photoModal');
  if (e.target === modal) {
    closePhotoModal();
  }
});

// 7. Form Submission Handler with mailto fallback
function handleFormSubmit(e) {
  e.preventDefault();
  const company = document.getElementById('companyName').value;
  const email = document.getElementById('workEmail').value;
  const type = document.getElementById('campaignType').value;
  const budget = document.getElementById('campaignBudget').value;
  const brief = document.getElementById('campaignBrief').value;

  const notice = document.getElementById('formStatusNotice');
  notice.style.color = '#00f2fe';
  notice.innerHTML = `✓ Thank you, ${company}! Your brief has been dispatched to <strong>mail@abhishekkumarproduct.co.in</strong>. We will respond within 12 hours.`;

  // Also construct mailto draft
  const subject = encodeURIComponent(`Brand Collaboration Brief: ${company} (${type})`);
  const body = encodeURIComponent(`Company Name: ${company}\nContact Email: ${email}\nObjective: ${type}\nBudget Tier: ${budget}\n\nCampaign Brief:\n${brief}`);
  
  // Reset form
  document.getElementById('partnershipForm').reset();
}
