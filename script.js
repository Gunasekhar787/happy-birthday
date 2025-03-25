document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("birthdayCard");
    const openBtn = document.getElementById("openCardBtn");
    const goToGalleryBtn = document.getElementById("goToGallery");
    const blastContainer = document.querySelector(".blast-container");

    openBtn.addEventListener("click", function () {
        card.classList.add("open");
        setTimeout(() => {
            blastContainer.style.display = "block";
        }, 500);
    });

    goToGalleryBtn.addEventListener("click", function () {
        window.location.href = "gallery.html"; // ✅ This Works Now!
    });
});
