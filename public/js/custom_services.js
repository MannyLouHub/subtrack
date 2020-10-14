/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $("#submitBtn").on("click", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const customSub = {
      // custom_name: $("#customSub")
      //   .val()
      //   .trim()
      name: $('#customName-input').val().trim(),
      price: $('#customPrice-input').val().trim(),
      description: $('#customDescription-input').val().trim()
    };

    // Send the POST request.
    $.ajax("/api/custom_services", {
      type: "POST",
      data: customSub
    }).then(function() {
      console.log("created new Subscription");
      // Reload the page to get the updated list
      window.location.replace("/members");
    });
  });
});
