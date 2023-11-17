/**
 * Add Menuable class to the element
 * @param {HTMLElement} trigger
 * @param {HTMLElement} nav
 * @param {number} speed
 */
export const menu = (trigger, nav) => {
  trigger.addEventListener("click", () => {
    nav.classList.toggle("menu--active");
  });

  nav.addEventListener("click", () => {
    nav.classList.toggle("menu--active");
  });
};
