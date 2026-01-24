document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");
    const cards = document.querySelectorAll(".art-card img");

    cards.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            const title = img.parentElement.querySelector("h3").innerText;
            captionText.innerHTML = title;
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