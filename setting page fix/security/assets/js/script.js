// SELECT MENU

const myAccount = document.querySelector("[my-account]");
const security = document.querySelector("[security]");
const support = document.querySelector("[support]");

if(myAccount){
  myAccount.addEventListener("click", () => {
    const menuAccount = document.querySelector(".setting__choose-account");
    const menuSecurity = document.querySelector(".setting__choose-security");
    const menuSupport = document.querySelector(".setting__choose-support");

    menuAccount.style.display = "block"
    menuSecurity.style.display = "none"
    menuSupport.style.display = "none"

    // add black background
    const circle = document.querySelector("[my-account__circle]")
    myAccount.classList.add("choose-active")
    circle.classList.add("circle-choose-active")

    // remove another 2
    security.classList.remove("choose-active")
    support.classList.remove("choose-active")

    const security_circle = document.querySelector("[security__circle]")
    const support_circle = document.querySelector("[support__circle]")
    security_circle.classList.remove("circle-choose-active")
    support_circle.classList.remove("circle-choose-active")
  })
}

if(security){
  security.addEventListener("click", () => {
    const menuAccount = document.querySelector(".setting__choose-account");
    const menuSecurity = document.querySelector(".setting__choose-security");
    const menuSupport = document.querySelector(".setting__choose-support");

    menuAccount.style.display = "none"
    menuSecurity.style.display = "block"
    menuSupport.style.display = "none"

    // add black background
    const circle = document.querySelector("[security__circle]")
    security.classList.add("choose-active")
    circle.classList.add("circle-choose-active")

    // remove another 2
    myAccount.classList.remove("choose-active")
    support.classList.remove("choose-active")

    const myAccount_circle = document.querySelector("[my-account__circle]")
    const support_circle = document.querySelector("[support__circle]")
    myAccount_circle.classList.remove("circle-choose-active")
    support_circle.classList.remove("circle-choose-active")
  })
}

if(support){
  support.addEventListener("click", () => {
    const menuAccount = document.querySelector(".setting__choose-account");
    const menuSecurity = document.querySelector(".setting__choose-security");
    const menuSupport = document.querySelector(".setting__choose-support");

    menuAccount.style.display = "none"
    menuSecurity.style.display = "none"
    menuSupport.style.display = "block"

    // add black background
    const circle = document.querySelector("[support__circle]")
    support.classList.add("choose-active")
    circle.classList.add("circle-choose-active")

    // remove another 2
    myAccount.classList.remove("choose-active")
    security.classList.remove("choose-active")

    const myAccount_circle = document.querySelector("[my-account__circle]")
    const security_circle = document.querySelector("[security__circle]")
    myAccount_circle.classList.remove("circle-choose-active")
    security_circle.classList.remove("circle-choose-active")
  })
}

// END SELECT MENU

// PREVIEW PHOTO WHEN CHOOSE AVATAR
const inputUploadImg = document.querySelector("[input-upload-img]");
const imagePreview = document.querySelector("[image-preview]")
if(inputUploadImg){
  inputUploadImg.addEventListener("change", (event) => {
    const [file] = inputUploadImg.files;
    if(file){
      imagePreview.src = URL.createObjectURL(file)
    }
  })
}
// END PREVIEW PHOTO WHEN CHOOSE AVATAR

// Toggle answer for FAQ
const faqs = document.querySelectorAll(".faq");

if(faqs){
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active")
    })
  })
}
// End Toggle answer for FAQ