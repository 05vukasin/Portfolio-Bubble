document.addEventListener("DOMContentLoaded", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (downArrow) {
        downArrow.addEventListener("click", function (event) {
            event.preventDefault(); // Sprečava default ponašanje ako je button
            window.scrollBy({
                top: 50,
                behavior: "smooth"
            });
        });
    }
});
