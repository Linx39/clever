import { handleSiteToogleClick } from "./site-toggle.js";
import { handleSiteLinkClick } from "./site-list.js";
import { closeSiteList } from "./site-toggle.js";

handleSiteToogleClick();
handleSiteLinkClick();

document.addEventListener(`scroll`, () => {
  closeSiteList();
})
