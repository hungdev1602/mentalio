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
// End Click in to words

// Toggle option (rename, delete)
const toggleOptions = document.querySelectorAll("[toggle-option]");
if(toggleOptions.length > 0){
  toggleOptions.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdownContent = item.querySelector("[dropdown-content]")
      dropdownContent.classList.remove("hidden")
      // Close dropdown
      window.addEventListener('click', function(e){   
        if (!dropdownContent.contains(e.target) && !item.contains(e.target)){
          dropdownContent.classList.add("hidden")
        }
      });

      // Delete Folder
      const buttonDeleteFolder = item.querySelector("[folder-delete]")
      if(buttonDeleteFolder){
        buttonDeleteFolder.addEventListener("click", () => {
          const folder = item.closest('div[folder]');
          const deletePopup = folder.querySelector("[delete-folder]")
          const deleteLayer = deletePopup.querySelector("[delete-folder-layer]")
          const buttonCancel = deletePopup.querySelector("[button-cancel-delete]")

          deletePopup.classList.remove("hidden")
          setTimeout(() => {
            deletePopup.classList.add("opacity")
          }, 100)
          // Click on layer
          deleteLayer.addEventListener("click", () => {
            deletePopup.classList.add("hidden")
            deletePopup.classList.remove("opacity")
          })
          // Click on cancel
          buttonCancel.addEventListener("click", () => {
            deletePopup.classList.add("hidden")
            deletePopup.classList.remove("opacity")
          })
        })
      }

      // Rename Folder
      const buttonRenameFolder = item.querySelector("[folder-rename]")
      if(buttonRenameFolder){
        buttonRenameFolder.addEventListener("click", () => {
          const folder = item.closest('div[folder]');
          const renamePopup = folder.querySelector("[rename-folder]")
          const renameLayer = renamePopup.querySelector("[rename-folder-layer]")
          const buttonCancel = renamePopup.querySelector("[button-cancel-rename]")

          renamePopup.classList.remove("hidden")
          setTimeout(() => {
            renamePopup.classList.add("opacity")
          }, 100)
          // Click on layer
          renameLayer.addEventListener("click", () => {
            renamePopup.classList.add("hidden")
            renamePopup.classList.remove("opacity")
          })
          // Click on cancel
          buttonCancel.addEventListener("click", () => {
            renamePopup.classList.add("hidden")
            renamePopup.classList.remove("opacity")
          })
        })
      }
    })
  })
}
// End Toggle option (rename, delete)