const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-icon");
const count = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.getElementsByClassName("slides");
const thumbnails = document.getElementsByClassName("thumbnail");
const addToCart = document.querySelector(".submit");
const cartAmount = document.querySelector(".cart-amount");
const cartIcon = document.querySelector(".cart-icon");
const shoppingCart = document.querySelector(".shopping-cart");
const noOfItems = document.querySelector(".no-of-items");
const totalAmount = document.querySelector(".total-amount");
const messageEmpty = document.querySelector(".message-empty");
const cartItems = document.querySelector(".items-in-cart");
const checkout = document.querySelector(".checkout");
const notEmpty = document.querySelector(".not-empty");
const deleteIcon = document.querySelector(".delete-icon");
const mySlide = document.getElementsByClassName("mySlides");
let currSlide = 0;
let total = 0;
let noItemsInCart = 0;

// slideshow
function removeCurrentSlide() {
  slides[currSlide].classList.remove("active");
  slides[currSlide].classList.add("hidden");
  thumbnails[currSlide].classList.remove("active");
}

function updateCurrentSlide() {
  slides[currSlide].classList.remove("hidden");
  slides[currSlide].classList.add("active");
  thumbnails[currSlide].classList.add("active");
}

//open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  mySlide[currSlide].style.display = "block";
}

//close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  mySlide[currSlide].style.display = "none";
}

function showSlides(n) {
  removeCurrentSlide();
  currSlide = n;
  updateCurrentSlide();
}

next.addEventListener("click", () => {
  removeCurrentSlide();
  currSlide++;
  if (currSlide >= slides.length) {
    currSlide = 0;
  }
  updateCurrentSlide();
});

prev.addEventListener("click", () => {
  removeCurrentSlide();
  currSlide--;
  if (currSlide < 0) {
    currSlide = slides.length - 1;
  }
  updateCurrentSlide();
});

//next and prev event listener for the lightbox preview
const modalPrev = document.querySelector(".modal-prev");
const modalNext = document.querySelector(".modal-next");
const modalThumbnails = document.getElementsByClassName("modal-thumbnail");
modalNext.addEventListener("click", () => {
  removeCurrentSlide();
  mySlide[currSlide].style.display = "none";
  modalThumbnails[currSlide].classList.remove("active");
  currSlide++;
  if (currSlide >= slides.length) {
    currSlide = 0;
  }
  updateCurrentSlide();
  mySlide[currSlide].style.display = "block";
  modalThumbnails[currSlide].classList.add("active");
});

modalPrev.addEventListener("click", () => {
  removeCurrentSlide();
  mySlide[currSlide].style.display = "none";
  modalThumbnails[currSlide].classList.remove("active");
  currSlide--;
  if (currSlide < 0) {
    currSlide = slides.length - 1;
  }
  updateCurrentSlide();
  mySlide[currSlide].style.display = "block";
  modalThumbnails[currSlide].classList.add("active");
});

function showModal(n) {
  removeCurrentSlide();
  mySlide[currSlide].style.display = "none";
  modalThumbnails[currSlide].classList.remove("active");
  currSlide = n;
  updateCurrentSlide();
  mySlide[currSlide].style.display = "block";
  modalThumbnails[currSlide].classList.add("active");
}
// prev.addEventListener("click", () => {
//   removeCurrentSlide();
//   currSlide--;
//   if (currSlide < 0) {
//     currSlide = slides.length - 1;
//   }
//   updateCurrentSlide();
// });

// side navbar with lightbox on mobile
menuBtn.addEventListener("click", () => {
  nav.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  nav.classList.add("hidden");
});

// no of items
plus.addEventListener("click", () => {
  total++;
  count.innerHTML = total;
  console.log(total);
});

minus.addEventListener("click", () => {
  total--;
  if (total < 0) {
    total = 0;
  }
  count.innerHTML = total;
  console.log(total);
});

//add to cart
addToCart.addEventListener("click", () => {
  noItemsInCart = total;
  cartAmount.innerHTML = noItemsInCart;
  if (noItemsInCart > 0) {
    cartAmount.classList.remove("hidden");
    messageEmpty.classList.add("hidden");
    cartItems.classList.remove("hidden");
    checkout.classList.remove("hidden");
    noOfItems.innerHTML = noItemsInCart;
    totalAmount.innerHTML = "$" + noItemsInCart * 125;
  } else {
    cartAmount.classList.add("hidden");
    messageEmpty.classList.remove("hidden");
    cartItems.classList.add("hidden");
    checkout.classList.add("hidden");
  }
});

cartIcon.addEventListener("click", () => {
  shoppingCart.classList.toggle("hidden");
  if (noItemsInCart == 0) {
    messageEmpty.classList.remove("hidden");
  }
});

deleteIcon.addEventListener("click", () => {
  cartAmount.classList.add("hidden");
  messageEmpty.classList.remove("hidden");
  notEmpty.classList.add("hidden");
});
