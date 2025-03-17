// Show the Scroll to Top Button when user scrolls down
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Scroll back to top with smooth behavior
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}