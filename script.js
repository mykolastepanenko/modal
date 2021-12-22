const openModal = document.querySelector("[data-modal-open]");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("[data-modal-close]");

function closeModalF() {
  modal.classList.add("d-none");
  document.body.style.overflow = "auto";
}

// открытие окна 
openModal.onclick = () => {
  modal.classList.remove("d-none");
  document.body.style.overflow = "hidden";
};
// 

// закрытие окна
closeModal.onclick = closeModalF; //по кнопке
document.onkeydown = (e)=>{
  //по клавише Esc
  if(e.key === "Escape") closeModalF();
}
modal.onclick = (e) => {
  //по клику на пустое пространство
  if (e.target.classList.contains("modal") && !modal.classList.contains("d-none")) {
    console.log(e.target);
    closeModalF();
  }
};
// 