//delete account button
const destroyAccount = document.getElementById("id01");
const cancelButton = document.getElementById("cancelButton");
const clearBox = document.getElementById("clearBox");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === destroyAccount) {
    destroyAccount.style.display = "none";
  }
};
cancelButton.onclick = function(event) {
  if (event.target === cancelButton) {
    clearBox.style.display = "none";
  }
};

$("#deleteButton").on("click", async e => {
  e.preventDefault();
  const response = await $.ajax({ type: "DELETE", url: "/api/userdelete/:id" });
  console.log(response);
  window.location.replace("/signup");
});


//Added styling JS
const navSlide = () => {
  const mobileView = document.querySelector(".mobile-view");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  mobileView.addEventListener("click", ()=>{
  //Toggle Nav
    nav.classList.toggle("nav-active");

  //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
      link.style.animation = `navLinkFade 2.5s ease forwards ${index/5+0.1}s`;
      }
    });
    //Mobile view animation
    mobileView.classList.toggle("toggle");
  });
  

}

navSlide();