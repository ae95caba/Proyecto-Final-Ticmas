//on mobile devices prevents unintended clicks on the projects links
function preventClick() {
  const projectLinks = document.querySelectorAll(".overlay a");

  projectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const parent = link.parentElement;
      if (window.getComputedStyle(parent).opacity !== "1") {
        e.preventDefault();
      }
    });
  });
}

export default preventClick;
