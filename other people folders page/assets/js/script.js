// Flip folder
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
})
// End Flip folder

// Click in to words
const links = document.querySelectorAll(".card-back-data__word");
if(links.length > 0){
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      // ko ảnh hưởng đến thẻ cha
      event.stopPropagation();
    })
  })
}


// Toggle popup
const buttonsReport = document.querySelectorAll("[button-report]");
const popupCreateFolders = document.querySelector("[popup-create-folders]");
if(buttonsReport.length > 0){
  buttonsReport.forEach((button) => {
    button.addEventListener("click", () => {
      popupCreateFolders.classList.toggle("hidden")
      setTimeout(() => {
        popupCreateFolders.classList.toggle("opacity")
      }, 100)
    })
  })
}

const popupLayer = document.querySelector("[popup-layer]");
if(popupLayer){
  popupLayer.addEventListener("click", () => {
    popupCreateFolders.classList.toggle("hidden")
    popupCreateFolders.classList.toggle("opacity")
  })
}

// Sort popup
const buttonSortPopup = document.querySelector("[button-sort-popup]");
const sortPopup = document.querySelector("[sort-popup]")
if(buttonSortPopup){
  buttonSortPopup.addEventListener("click", () => {
    sortPopup.classList.add("show")
    setTimeout(() => {
      sortPopup.classList.add("opacity")
    }, 100)
  })
}

// Close sort popup
window.addEventListener('click', (e) => {   
  if (sortPopup.contains(e.target)){
    // Clicked in box editPopup
  } else{
    sortPopup.classList.add("hidden");
    sortPopup.classList.remove("opacity");
  }
});