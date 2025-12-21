if (typeof window === "undefined") throw new Error("ticker.js loaded on server");

window.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".ticker-track");
  const speed = 1;

  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  let translateX = 0;

  function loop() {
    translateX -= speed;
    if (translateX <= -track.scrollWidth / 2) {
      translateX = 0;
    }
    track.style.transform = `translateX(${translateX}px)`;
    requestAnimationFrame(loop);
  }

  loop();
});