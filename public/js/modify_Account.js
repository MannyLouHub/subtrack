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
