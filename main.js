document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.getElementById("about-btn");
    var extraContent = document.querySelector(".extra-content");

    if (readMoreBtn && extraContent) { // Check if elements exist
        readMoreBtn.addEventListener("click", function() {
            if (extraContent.style.display === "none" || extraContent.style.display === "") {
                extraContent.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                extraContent.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    } else {
        console.error("One or both of the elements 'about-btn' and 'extra-content' not found.");
    }
});




/*------------------------ScrollReveal Js-------------------------*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img ,.portfolio-box,.contact form,.skill-box', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});


