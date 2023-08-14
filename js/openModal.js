const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");
  const modal = document.getElementById("myModal");
  const modalBg = document.getElementById("modalBg");

  openModalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modalBg) {
      modal.classList.add("hidden");
    }
  });