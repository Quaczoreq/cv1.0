// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    const content = header.nextElementSibling;
    
    accordion.classList.toggle('active');
  });
});

document.querySelectorAll('.nested-accordion-header').forEach(header => {
  header.addEventListener('click', (e) => {
    e.stopPropagation();
    const accordion = header.parentElement;
    
    accordion.classList.toggle('active');
  });
});

// EmailJS Configuration
emailjs.init('m5iXLobcxC0hDlfLd'); // publick key on emailJS

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Send email using EmailJS
  emailjs.sendForm('outlookMessageService', 'CVmessageNotification', this)
    .then(function() {
      // Success
      alert('Thank you! Your message has been sent successfully.');
      document.getElementById('contactForm').reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, function(error) {
      // Error
      alert('Oops! Something went wrong. Please try again.\nError: ' + error.text);
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});
