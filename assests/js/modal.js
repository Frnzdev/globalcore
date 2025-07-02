const modal = document.querySelector("#enviar-msg");
const fecharModal = document.querySelector("#fechar-modal");
const modalUnsucess = document.querySelector("#modal-unsucess");

modal.addEventListener("click", () => {
  modalUnsucess.classList.remove("hidden");
});

fecharModal.addEventListener("click", () => {
  modalUnsucess.classList.add("hidden");
});
