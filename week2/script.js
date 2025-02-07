const images = document.querySelectorAll(".tilt");

images.forEach(image => {
  image.addEventListener("mousemove", event => {
    const { top, bottom, left, right } = image.getBoundingClientRect();

    const middleX = (right - left) / 2;
    const middleY = (bottom - top) / 2;

    const clientX = event.clientX - left;
    const clientY = event.clientY - top;

    const offsetX = (clientX - middleX) / middleX;
    const offsetY = (middleY - clientY) / middleY;

    image.style.transform = `perspective(1000px) rotateY(${offsetX * 5}deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  });
});
