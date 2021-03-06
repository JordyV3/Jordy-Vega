require("./styles/main.scss");
require("./images/design.png");
require("./images/Jve3.png");
require("./images/git.png");
require("./images/javascript.svg");
require("./images/react.svg");

window.addEventListener("scroll", () => {
  const asideLinks = document.querySelector(".aside-links");
  const onScroll = document.documentElement.scrollTop;

  if (window.innerWidth >= 1024) {
    if (onScroll > 600) {
      asideLinks.style.transform = "translate(0%, -50%)";
      asideLinks.style.left = "5%";
    } else {
      asideLinks.style.left = "0%";
      asideLinks.style.transform = "translate(-100%, -50%)";
    }
    if (onScroll > 2650) {
      asideLinks.style.left = "0%";
      asideLinks.style.transform = "translate(-100%, -50%)";
    }
  }
});
