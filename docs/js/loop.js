/**
 * Loop animation
 * @param {HTMLElement} container
 * @param {number} speed
 */
export const loop = (container, speed = 0.5) => {
  const originalContent = container.innerHTML;
  container.innerHTML = originalContent.repeat(3);
  const singleContentWidth = container.scrollWidth / 3;

  let accumulatedScroll = 0;

  const scroll = () => {
    accumulatedScroll += speed;

    if (accumulatedScroll >= 1) {
      container.scrollLeft += Math.floor(accumulatedScroll);
      accumulatedScroll -= Math.floor(accumulatedScroll);
    }

    if (container.scrollLeft >= singleContentWidth) {
      container.scrollLeft -= singleContentWidth;
    }

    console.log({
      accumulatedScroll,
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
    });

    requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
};
