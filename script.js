document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const phoneCallButtons = document.querySelectorAll('[data-phone-call]');
  phoneCallButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      call();
    });
  });
});

function call() {
  const phoneNumber = '9639533716';
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
}
