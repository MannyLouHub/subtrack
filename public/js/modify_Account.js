$(() => {
  $(".deleteButton").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");

    //send delete request
    $.ajax({
      type: "DELETE",
      url: "/api/user_data/" + id
    }).then(location.reload());
  });
});
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
