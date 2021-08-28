const header = document.querySelector("header");
const menus = document.querySelectorAll(".header-link");

// NOTE: scroll fix header
window.addEventListener("scroll", () => {
  const docScroll = document.documentElement.scrollTop;

  if (docScroll > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// NOTE: menu active when clicked
menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menus.forEach((menu) => {
      menu.classList.remove("active");
    });

    menu.classList.add("active");
  });
});
