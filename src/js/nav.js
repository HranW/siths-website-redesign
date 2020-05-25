window.onscroll = function () {
  stickyFunction();
};

var navN2 = document.getElementById("nav");

var sticky = navN2.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navN2.classList.add("sticky");
  } else {
    navN2.classList.remove("sticky");
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navAnimation = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navAnimation.classList.toggle("nav-active");
    console.log(navAnimation);
  });
};

export const navFunc = ()=> {
  stickyFunction();
  navSlide();
};