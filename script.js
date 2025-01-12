document.addEventListener("DOMContentLoaded", () =>{
    const vid = document.querySelector(".vid")

    function playvideo(){
        vid.play()
    }

    function pauseVideo(){
        vid.pause()
        vid.currentTime = 0;
    }

    vid.addEventListener("mouseenter",playvideo)
    vid.addEventListener("mouseleave",pauseVideo)

})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex +=n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".slides");
    if( n > slides.length ) {slideIndex =1}
    if(n< 1){slideIndex =slides.length}
    for (i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display ="block";

}