// Animate on scroll
const faders = document.querySelectorAll('.fade-in, .slide-up');

const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationPlayState = "running";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = "paused";
  appearOnScroll.observe(fader);
});

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMessage");

    if (!name || !email || !subject || !message) {
      msg.textContent = "⚠️ Please fill out all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    }
  });
}
