document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const cards = document.querySelectorAll(".art-card img");

    cards.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            document.body.style.overflow = "hidden"; 
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});