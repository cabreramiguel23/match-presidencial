// Landing page subtle interactions

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for steps section
  const steps = document.querySelectorAll('.step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeUp 0.6s ${i * 0.1}s ease both`;
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.2 });
  
  steps.forEach(step => {
    step.style.opacity = '0';
    observer.observe(step);
  });

  // Cursor glow effect on hero
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hero.style.setProperty('--mx', x + 'px');
      hero.style.setProperty('--my', y + 'px');
    });
  }
});
