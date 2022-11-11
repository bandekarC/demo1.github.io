
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    
  
    // function myFunction() {
    //     var dots = document.getElementById("dots");
    //     var moreText = document.getElementById("more");
    //     var btnText = document.getElementById("myBtn");
      
    //     if (dots.style.display === "none") {
    //       dots.style.display = "inline";
    //       btnText.innerHTML = "Read more"; 
    //       moreText.style.display = "none";
    //     } else {
    //       dots.style.display = "none";
    //       btnText.innerHTML = "Read less"; 
    //       moreText.style.display = "inline";
    //     }
    //   }









    'use strict'
    var testim = document.getElementById("testim"),
        testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
        testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
        testimleftArrow = document.getElementById("left-arrow"),
        testimRightArrow = document.getElementById("right-arrow"),
        testimSpeed = 4500,
        currentSlide = 0,
        currentActive = 0,
        testimTimer
        ;
    // coding with nick
    window.onload = function () {
    
        // Testim Script
        function playSlide(slide) {
            for (var k = 0; k < testimDots.length; k++) {
                testimContent[k].classList.remove("active");
                testimContent[k].classList.remove("inactive");
                testimDots[k].classList.remove("active");
            }
            if (slide < 0) {
                slide = currentSlide = testimContent.length - 1;
            }
            if (slide > testimContent.length - 1) {
                slide = currentSlide = 0;
            }
            if (currentActive != currentSlide) {
                testimContent[currentActive].classList.add("inactive");
            }
            testimContent[slide].classList.add("active");
            testimDots[slide].classList.add("active");
    
            currentActive = currentSlide;
    
            clearTimeout(testimTimer);
            testimTimer = setTimeout(function () {
                playSlide(currentSlide += 1);
            }, testimSpeed)
        }
    // coding with nick
        testimleftArrow.addEventListener("click", function () {
            playSlide(currentSlide -= 1);
        })
        testimRightArrow.addEventListener("click", function () {
            playSlide(currentSlide += 1);
        })
    
        for (var l = 0; l < testimDots.length; l++) {
            testimDots[l].addEventListener("click", function () {
                playSlide(currentSlide = testimDots.indexOf(this));
            })
        }
        playSlide(currentSlide);
    
    }
    


