const hoverContainers = document.querySelectorAll('.hover-container');

hoverContainers.forEach(container => {
  const followImage = container.querySelector('.follow-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    followImage.style.left = `${offsetX}px`;
    followImage.style.top = `${offsetY}px`;
  });

  container.addEventListener('mouseleave', () => {
    followImage.style.display = 'none'; // Hide the image when the mouse leaves
  });

  container.addEventListener('mouseenter', () => {
    followImage.style.display = 'block'; // Show the image when the mouse enters
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");

  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  });
});
