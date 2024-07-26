document.addEventListener('DOMContentLoaded', () => {
  const learnMoreButton = document.getElementById('learnMore');
  learnMoreButton.addEventListener('click', () => {
      window.location.href = '#services';
  });

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Message sent!');
  });
});
