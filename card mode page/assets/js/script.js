// Flip cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
})

// CLick on edit button
const editModes = document.querySelectorAll("[edit-mode]");
const editPopup = document.querySelector("[editPopup]")
if(editModes){
  editModes.forEach(editMode => {
    editMode.addEventListener("click", (event) => {
      // ko ảnh hưởng đến thẻ cha
      event.stopPropagation();
      editPopup.classList.add("show")
      setTimeout(() => {
        editPopup.classList.add("opacity")
      }, 100)
    })
  })
}
// Close popup
window.addEventListener('click', (e) => {   
  if (editPopup.contains(e.target)){
    // Clicked in box editPopup
  } else{
    editPopup.classList.remove("show");
    editPopup.classList.remove("opacity");
  }
});


// SwiperJS script
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});