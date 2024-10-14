// Toggle popup
const folderTogglePopup = document.querySelector("[folder-toggle-popup]");
const popupCreateFolders = document.querySelector("[popup-create-folders]");
if(folderTogglePopup){
  folderTogglePopup.addEventListener("click", () => {
    popupCreateFolders.classList.toggle("hidden")
    setTimeout(() => {
      popupCreateFolders.classList.toggle("opacity")
    }, 100)
  })
}

const popupLayer = document.querySelector("[popup-layer]");
if(popupLayer){
  popupLayer.addEventListener("click", () => {
    popupCreateFolders.classList.toggle("hidden")
    popupCreateFolders.classList.toggle("opacity")
  })
}
// End Toggle popup

// Flip folder
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
})
// End Flip folder