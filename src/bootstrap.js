function bootstrapLinks() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const current = document.querySelector(".active");
      current.classList.remove("active");
      link.classList.add("active");
    });
  });
}

export default bootstrapLinks;
