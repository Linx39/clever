import { closeSiteList } from "./site-toggle.js";

const MAIN_NAV_OPENED_CLASS = `main-nav--opened`;

const mainNav = document.querySelector(`.main-nav`);
const siteLink = document.querySelectorAll(`.site-list__link`);

export const handleSiteLinkClick = () => {
  siteLink.forEach((link) => {
    link.addEventListener(`click`, () => {
      if (mainNav.classList.contains(MAIN_NAV_OPENED_CLASS)) {
        closeSiteList();
        return;
      }
    })
  });
}
