document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const phoneCallButtons = document.querySelectorAll('[data-phone-call]');
  phoneCallButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      call();
    });
  });

  // Lightbox functionality
  const galleryItems = document.querySelectorAll('.gallery-clickable');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');
  let currentIndex = 0;
  const images = Array.from(galleryItems);

  function openModal(index) {
    if (index < 0) currentIndex = images.length - 1;
    if (index >= images.length) currentIndex = 0;

    const item = images[currentIndex];
    const imageSrc = item.getAttribute('data-image');
    const imageTitle = item.getAttribute('data-title');

    modalImage.src = imageSrc;
    modalTitle.textContent = imageTitle;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  galleryItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      currentIndex = index;
      openModal(currentIndex);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  prevBtn.addEventListener('click', function () {
    currentIndex--;
    openModal(currentIndex);
  });

  nextBtn.addEventListener('click', function () {
    currentIndex++;
    openModal(currentIndex);
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (modal.classList.contains('active')) {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        currentIndex--;
        openModal(currentIndex);
      } else if (event.key === 'ArrowRight') {
        currentIndex++;
        openModal(currentIndex);
      }
    }
  });
});

function call() {
  const phoneNumber = '9639533716';
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
}
