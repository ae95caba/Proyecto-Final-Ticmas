function openImgModal() {
  const img = document.getElementById("me");
  const imgModal = document.getElementById("me-modal");
  const closeButton = document.querySelector("#me-modal button");
  function closeOnClickOut(e) {
    if (e.target.closest(".me-modal-container") == null) {
      imgModal.style.visibility = "hidden";
      document.removeEventListener("click", closeOnClickOut);
    }
  }

  //alert("runing openImg");
  img.addEventListener("click", () => {
    //alert("img clicked");
    imgModal.style.visibility = "visible ";
    setTimeout(() => {
      document.addEventListener("click", closeOnClickOut);
    }, 10);
  });

  closeButton.addEventListener("click", () => {
    imgModal.style.visibility = "hidden";
    document.removeEventListener("click", closeOnClickOut);
  });
}
export default openImgModal;
