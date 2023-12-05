let slideIndex = 0;

export const slideshow_img =()=>{
    let i;
    let slides = document.getElementsByClassName("hero_illustration");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    slides[slideIndex-1].style.display = "block";  

    setTimeout(slideshow_img, 8000); // Change image every 2 seconds
}