const MAIN_NAV_OPENED_CLASS = `main-nav--opened`;
const TOGGLE_OPENED_CLASS = `site-toggle--opened`;
const TOGGLE_CLOSED_CLASS = `site-toggle--closed`;
const SITE_LIST_OPENED_CLASS = `site-list--opened`;

const mainNav = document.querySelector(`.main-nav`);
const toggle = document.querySelector(`.main-nav__site-toggle`);
const siteList = document.querySelector(`.site-list`);

export const closeSiteList = () => {
  mainNav.classList.remove(MAIN_NAV_OPENED_CLASS);
  siteList.classList.remove(SITE_LIST_OPENED_CLASS);
  toggle.classList.remove(TOGGLE_OPENED_CLASS);
  toggle.classList.add(TOGGLE_CLOSED_CLASS);
}

export const openSiteList = () => {
  mainNav.classList.add(MAIN_NAV_OPENED_CLASS);
  siteList.classList.add(SITE_LIST_OPENED_CLASS);
  toggle.classList.add(TOGGLE_OPENED_CLASS);
  toggle.classList.remove(TOGGLE_CLOSED_CLASS);
}

export const handleSiteToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(MAIN_NAV_OPENED_CLASS)) {
      closeSiteList();
      return;
    }

    openSiteList();
  });
};
