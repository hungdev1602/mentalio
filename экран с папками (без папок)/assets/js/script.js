// Toggle popup
const buttonTogglePopup = document.querySelector("[button-toggle-popup]");
const popupCreateFolders = document.querySelector("[popup-create-folders]");
if(buttonTogglePopup){
  buttonTogglePopup.addEventListener("click", () => {
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