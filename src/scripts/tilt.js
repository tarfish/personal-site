if (typeof window === "undefined") return;

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-3d");

  cards.forEach(card => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const maxTilt = 10;
    const ease = 0.08;

    function animate() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      card.style.transform = `
        rotateX(${currentX}deg)
        rotateY(${currentY}deg)
        translateZ(20px)
      `;

      requestAnimationFrame(animate);
    }

    animate();

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetX = -y * maxTilt;
      targetY = x * maxTilt;
    });

    card.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
    });
  });
});