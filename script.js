// Countdown
const countdown = () => {
  const eventDate = new Date("2025-12-31T00:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};
setInterval(countdown, 1000);

// Logo animasi saat scroll
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");
  logo.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll navbar
document.querySelectorAll(".nav-links a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll animation dengan IntersectionObserver
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
