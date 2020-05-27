// sticky navbar function
window.onscroll = function () {
  stickyMobile(x);
};

var nav = document.getElementById("sticky-nav");

var sticky = nav.offsetTop;

const navDrop = () => {
  const burger = document.querySelector(".burger");
  const navAnimation = document.querySelector(".nav-links-two");
  const lineOne = document.querySelector(".line1");
  const lineTwo = document.querySelector(".line2");
  const lineThree = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    navAnimation.classList.toggle("nav-links-two-active");
    lineOne.classList.toggle("line1-active");
    lineTwo.classList.toggle("line2-active");
    lineThree.classList.toggle("line3-active");
    console.log(1+1);
  });
};

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function stickyMobile(x) {
  if (x.matches) {
    stickyFunction();
  }
}

var x = window.matchMedia("(min-width: 768px)");
x.addListener(stickyMobile);

export const navFunc = () => {
  navDrop();
};
