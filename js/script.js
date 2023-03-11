let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("featured-posts-slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i=0; i < slides.length; i++){
        slides[i].style.display ="none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<img src="./img/svg/icons-like-click.png" width="15" height="15" id="icon">`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<img src="./img/svg/icons-like.png" width="15" height="15" id="icon">`;
    count.textContent--;
  }
});

const btn = document.querySelector('.button__view-more');
    const cards = document.querySelectorAll('.subsection_latest-posts');

    btn.addEventListener('click', function() {

        for(let card of cards) {
            card.style.display = 'grid'
        }

        btn.style.display = 'none';
    });