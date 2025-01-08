tailwind.config = {
  theme: {
    extend: {
      colors: {
        "galactic-blue": "#755CDE",
        "summer-yellow": "#F6A560",
        pink: "#F39E9E",
        "light-red": "#EB7565",
        cyan: "#61C4B7",
        "dark-purple": "#552049",
        black: "#030303",
        "medium-brown": "#7A746E",
        "light-cream": "#FFF7F0",
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        lg: [
          "56px ",
          {
            lineHeight: "70px",
            fontWeight: "bold",
          },
        ],
        md: [
          "40px ",
          {
            lineHeight: "51px",
            fontWeight: "bold",
          },
        ],
        sm: [
          "36px ",
          {
            lineHeight: "40px",
            fontWeight: "bold",
          },
        ],
        base: [
          "18px ",
          {
            lineHeight: "28px",
            fontWeight: "normal",
          },
        ],
      },
    },
  },
};

let slideIndexLeft = 2;
showSlidesLeft(slideIndexLeft);
let slideIndex = 3;
showSlides(slideIndex);
let slideIndexRight = 4;
showSlidesRight(slideIndexRight);

function plusSlides(n) {
  showSlidesLeft((slideIndexLeft += n));
  showSlides((slideIndex += n));
  showSlidesRight((slideIndexRight += n));
}

function showSlidesLeft(n) {
  let i;
  let slidesLeft = document.getElementsByClassName("mySlidesLeft");
  if (n > slidesLeft.length) {
    slideIndexLeft = 1;
  }
  if (n < 1) {
    slideIndexLeft = slidesLeft.length;
  }
  for (i = 0; i < slidesLeft.length; i++) {
    slidesLeft[i].style.display = "none";
  }
  slidesLeft[slideIndexLeft - 1].style.display = "block";
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showSlidesRight(n) {
  let i;
  let slidesRight = document.getElementsByClassName("mySlidesRight");
  if (n > slidesRight.length) {
    slideIndexRight = 1;
  }
  if (n < 1) {
    slideIndexRight = slidesRight.length;
  }
  for (i = 0; i < slidesRight.length; i++) {
    slidesRight[i].style.display = "none";
  }
  slidesRight[slideIndexRight - 1].style.display = "block";
}

document.getElementById("left").addEventListener("click", function (n) {
  plusSlides(-1);
});
document.getElementById("right").addEventListener("click", function (n) {
  plusSlides(1);
});
