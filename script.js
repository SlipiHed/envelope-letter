document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("evnelope");
    const btnOpen = document.getElementById("open");
    const btnReset = document.getElementById("close");
    const fullLetter = document.querySelector(".full-letter");
    const closeFullLetterBtn = document.querySelector(".close-full-letter");

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
        fullLetter.classList.add("visible");  // Show full letter
    }

    function closeEnvelope() {
        envelope.classList.add("close");
        envelope.classList.remove("open");
        fullLetter.classList.remove("visible"); // Hide full letter when envelope closes
    }

    function closeFullLetter() {
        fullLetter.classList.remove("visible");  // Hide full letter only
    }

    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnReset.addEventListener("click", closeEnvelope);

    if (closeFullLetterBtn) {
        closeFullLetterBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent envelope open event
            closeFullLetter();
        });
    }
});
