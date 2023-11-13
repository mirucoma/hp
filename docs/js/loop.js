/**
 * Loop animation
 * @param {HTMLElement} container
 */
export const loop = (container, speed = 0.5) => {
  const originalContent = container.innerHTML;
  container.innerHTML += originalContent;

  let accumulatedScroll = 0;

  const scroll = () => {
    accumulatedScroll += speed;
    if (container.scrollLeft < container.scrollWidth / 2) {
      container.scrollLeft += Math.floor(accumulatedScroll);
      accumulatedScroll -= Math.floor(accumulatedScroll);
    } else {
      container.scrollLeft = 0;
    }
    requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
};
