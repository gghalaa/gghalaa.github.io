// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Highlight active navbar link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  // Force Contact to be active when user reaches bottom of page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    currentSection = "contact";
  }

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

console.log("Portfolio loaded successfully!");