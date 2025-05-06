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