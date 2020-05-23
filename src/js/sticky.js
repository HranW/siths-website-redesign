window.onscroll = function () {
  stickyFunction();
};

var navN2 = document.getElementById("nav");

var sticky = navN2.offsetTop;

export function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navN2.classList.add("sticky");
  } else {
    navN2.classList.remove("sticky");
  }
}