/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const customSub = {
      // custom_name: $("#customSub")
      //   .val()
      //   .trim()
      name: $("#customName-input")
        .val()
        .trim(),
      price: $("#customPrice-input")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/custom_services", {
      type: "POST",
      data: customSub
    }).then(() => {
      console.log("created new Subscription");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
