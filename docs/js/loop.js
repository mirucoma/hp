/**
 * Loop animation
 * @param {HTMLElement} container
 * @param {number} speed
 */
export const loop = (container, speed = 0.5) => {
  const originalContent = container.innerHTML;
  container.innerHTML = originalContent.repeat(3);
  const singleContentWidth = container.scrollWidth / 3;

  let animationFrameId = null;
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

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  // ハッシュチェンジ中にアニメーションを一時停止
  let timeoutId = null;
  window.addEventListener("hashchange", () => {
    cancelAnimationFrame(animationFrameId);
    clearTimeout(timeoutId);
    // 1秒後に再開
    timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 1000);
  });
};
