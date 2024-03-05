const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobilenav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen === true) {
      mobilenav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobilenav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobilenav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
