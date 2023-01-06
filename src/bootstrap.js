const links = document.querySelectorAll(".nav-link");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", () => {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    link.classList.add("active");
  });
});
