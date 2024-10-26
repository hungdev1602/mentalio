// PREVIEW PHOTO 
const inputUploadImg = document.querySelector("[input-upload-img]");
const imagePreview = document.querySelector("[image-preview]")
const imagePreviewClose = document.querySelector("[image-preview-close]")
if(inputUploadImg){
  inputUploadImg.addEventListener("change", (event) => {
    const [file] = inputUploadImg.files;
    if(file){
      imagePreview.style.display = "block"
      imagePreview.src = URL.createObjectURL(file)
      imagePreviewClose.style.display = "block"

      imagePreviewClose.addEventListener("click", () => {
        imagePreview.style.display = "none"
        imagePreview.src = ""
        imagePreviewClose.style.display = "none"
      })
    }
  })
}
// END PREVIEW PHOTO 

// Toggle popup
const buttonTestTogglePopup = document.querySelector("[button-test-toggle-popup]");
const popupCreateFolders = document.querySelector("[popup-create-folders]");
if(buttonTestTogglePopup){
  buttonTestTogglePopup.addEventListener("click", () => {
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