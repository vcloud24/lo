document.addEventListener("DOMContentLoaded", function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mainContent = document.getElementById("main-content");
    const mobileWarning = document.getElementById("mobile-warning");

    if (isMobile) {
        mainContent.style.display = "none";
        mobileWarning.style.display = "flex";
    } else {
        mobileWarning.style.display = "none";
    }
});
