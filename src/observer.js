function observeContainer() {
  //this observer watchs for the container element of the element I want to animate
  //because the animation hides the element bugging it
  const observer = new IntersectionObserver((entries) => {
    console.log(`entries${entries}`);
    entries.forEach((entry) => {
      console.log(`entry:${entry}`);
      if (entry.isIntersecting) {
        entry.target.firstElementChild.classList.add(
          entry.target.getAttribute("data-animation")
        );
      } else {
        entry.target.firstElementChild.classList.remove(
          entry.target.getAttribute("data-animation")
        );
      }
    });
  });

  const hidden = document.querySelectorAll(".sub-cont3");

  hidden.forEach((el) => {
    console.log(`el:${el}`);
    observer.observe(el);
  }); //tell the observer to observe each one of them
}

function observerBars() {
  //this observer watchs for the container element of the element I want to animate
  //because the animation hides the element bugging it
  const observer = new IntersectionObserver((entries) => {
    //console.log(`entries${entries}`);
    entries.forEach((entry) => {
      //console.log(`entry:${entry}`);
      if (entry.isIntersecting) {
        entry.target.classList.remove("fill-reset");
        entry.target.classList.add("fill");
        //entry.target.style.width = "70%";
      } else {
        entry.target.classList.remove("fill");
        entry.target.classList.add("fill-reset");
        //entry.target.style.width = "0px";
        //alert("hola");
      }
    });
  });

  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach((bar) => {
    //console.log(`bar:${bar}`);
    observer.observe(bar);
  }); //tell the observer to observe each one of them
}
export { observeContainer, observerBars };
