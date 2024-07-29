const modal = document.querySelectorAll(".modal");
const cardBTN = document.querySelectorAll(".card__product");
const modalClose = document.querySelectorAll(".modal__close");
const modalCard = document.querySelectorAll(".modal__card");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

// Show Modal
cardBTN.forEach((cardBTN, i) => {
  cardBTN.addEventListener("click", () => {
    activeModal(i);
  });
});

// Hide Modal
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

// Hide modal on background click
modal.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.classList.remove("active-modal");
  });
});

modalCard.forEach((modalCard) => {
  modalCard.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
