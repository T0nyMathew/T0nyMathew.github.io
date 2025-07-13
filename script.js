const sections = document.querySelectorAll('.slide');
const ball = document.querySelector('.progress-ball');
const bumps = document.querySelectorAll('.progress-bump');
let current = 0;

function showSlide(index) {
  sections.forEach((section, i) => {
    section.classList.remove('active');
    if (i === index) section.classList.add('active');
  });

  // Move the ball
  const progressLine = document.querySelector('.progress-line');
  const height = progressLine.clientHeight;
  const gap = height / (sections.length - 1);
  ball.style.top = `${index * gap}px`;
}

// Setup bump positions dynamically
function positionBumps() {
  const progressLine = document.querySelector('.progress-line');
  const height = progressLine.clientHeight;
  const gap = height / (sections.length - 1);
  bumps.forEach((bump, i) => {
    bump.style.top = `${i * gap}px`;
  });
}

// Scroll detection
let scrollTimeout;
window.addEventListener('wheel', (e) => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (e.deltaY > 0 && current < sections.length - 1) {
      current++;
      showSlide(current);
    } else if (e.deltaY < 0 && current > 0) {
      current--;
      showSlide(current);
    }
  }, 100);
});

// Bump click
bumps.forEach((bump, i) => {
  bump.addEventListener('click', () => {
    current = i;
    showSlide(current);
  });
});

window.addEventListener('load', () => {
  positionBumps();
  showSlide(current);
});
