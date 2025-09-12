// Typing Effect
const text = "Doaa Ali";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 150);
  }
}
typingEffect();

// Show sections on scroll
const sections = document.querySelectorAll("section");
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  // Animation for projects
  projects.forEach(proj => {
    const rect = proj.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      proj.classList.add("show");
    }
  });
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
