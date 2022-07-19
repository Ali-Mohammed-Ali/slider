let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slideCount = sliderImages.length;
let currentSlide = 1;
let slideNumber = document.getElementById("slider-number");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// create ul ele
let pagination = document.createElement("ul");
pagination.setAttribute("id", "pagination-ul");
// create li
for (let i = 1; i <= slideCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.textContent = i;
  pagination.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(pagination);

let paginationUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}
function checker() {
  slideNumber.textContent = `slide # ${currentSlide}`;
  // trager remove active class function
  removeAllActives();
  // add active class
  sliderImages[currentSlide - 1].classList.add("active");
  paginationUl.children[currentSlide - 1].classList.add("active");
  // add and remove disabled class from pagination
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentSlide == slideCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function removeAllActives() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
checker();
