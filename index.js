
  const container = document.getElementById('scroll-container');
  let isDown = false;
  let startX, scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // geser lebih cepat
    container.scrollLeft = scrollLeft - walk;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown > a");
    const dropdownMenu = document.querySelector(".content-dropdown");

    dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show-dropdown");
    });

    // Menutup dropdown saat klik di luar menu
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            dropdownMenu.classList.remove("show-dropdown");
        }
    });
});