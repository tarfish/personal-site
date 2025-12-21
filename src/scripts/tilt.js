if (typeof window === "undefined") throw new Error("tilt.js loaded on server");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-3d").forEach(card => {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    const max = 7;
    const ease = 0.1;
    const depth = 10;

    const loop = () => {
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      card.style.transform = `
        perspective(1200px)
        rotateX(${cx}deg)
        rotateY(${cy}deg)
        translateZ(${depth}px)
      `;
      requestAnimationFrame(loop);
    };

    loop();

    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const offsetX = (e.clientX - r.left) / r.width - 0.5;
      const offsetY = (e.clientY - r.top) / r.height - 0.5;

      tx = -offsetY * max;
      ty = offsetX * max;
    });

    card.addEventListener("mouseleave", () => {
      tx = 0;
      ty = 0;
    });
  });
});
