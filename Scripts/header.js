(function () {
  "use strict";
  let screenWidth;
  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const links = header.getElementsByTagName("a");
    const bar = document.getElementsByClassName("bar");

    if (screenWidth < 769) {
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#000000";
      }
      if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(248, 249, 250, 1)";
        header.style.borderBottom = "2px solid #000000";
        for (let i = 0; i < bar.length; i++) {
          bar[i].style.backgroundColor = "#000000";
        }
      } else {
        header.style.backgroundColor = "rgba(248, 248, 248, 0)";
        header.style.borderBottom = "0px solid #000000";
        for (let i = 0; i < bar.length; i++) {
          bar[i].style.backgroundColor = "white";
        }
      }
    } else {
      if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(248, 249, 250, 1)";
        header.style.borderBottom = "2px solid #000000";
        for (let i = 0; i < links.length; i++) {
          links[i].style.color = "#000000";
        }
      } else {
        header.style.backgroundColor = "rgba(248, 248, 248, 0)";
        header.style.borderBottom = "0px solid #000000";
        for (let i = 0; i < links.length; i++) {
          links[i].style.color = "white";
        }
      }
    }
  });
  function updateElementsPosition() {
    screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }

  updateElementsPosition();

  window.addEventListener("resize", function () {
    updateElementsPosition();
  });

  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
  });

  document.querySelectorAll("links-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      links.classList.toggle("active");
    });
  });

  const mainLogo = document.getElementById("logo-img");
  mainLogo.addEventListener("click", function () {
    window.open("index.html", "_self");
  });

})();
