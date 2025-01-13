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


function toggleMenu() {
    const menu = document.querySelector('.Not_Type');
    const isVisible = menu.classList.contains('show');

    if (window.innerWidth < 800) {
        menu.classList.toggle('show', !isVisible);
    }
}

document.querySelectorAll('Not_Type .Tags').forEach(link => {
    link.addEventListener('click', (event) => {
        const menu = document.querySelector('.Not_Type');
        menu.classList.remove('show');
        window.location.href = event.target.href;
    });
});

window.addEventListener('resize', () => {
    const menu = document.querySelector('.Not_Type');
    if (window.innerWidth > 800) {
        menu.classList.remove('show');
    }
});