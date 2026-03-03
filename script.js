document.addEventListener("DOMContentLoaded", function() {

  const links = document.querySelectorAll("nav a");

  links.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
