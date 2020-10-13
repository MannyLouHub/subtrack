const subsTable = document.getElementById('subsTable')

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/members").then(data => {
    for (let i = 0; i < data.length; i++) {
      const subName = data[i].name
      const subPrice = data[i].price
      const subCategory = data[i].category
      const subIcon = data[i].icon

      const tr = document.createElement("tr");
      const tdSub = document.createElement("td");
      const tdCategory = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdAdd = document.createElement("td");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figure = document.createElement('figure');
      const figCaption = document.createElement("figcaption")
      const iTag = document.createElement('i')

      iTag.classList.add("fas", "fa-plus")

      button.classList.add("addBtn")

      img.setAttribute("src", subIcon);
      img.setAttribute("alt", subName);
      img.setAttribute("id", "logos");
      img.classList.add("imgLogo")

      tr.classList.add("row", "text-center");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdCategory.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      figCaption.append(subName);
      figure.append(img, figCaption);
      tdSub.append(figure);

      tdCategory.append(subCategory)
      tdPrice.append(subPrice)

      button.append(iTag);
      tdAdd.append(button)

      tr.append(tdSub, tdCategory, tdPrice, tdAdd);
      subsTable.append(tr);

    }
  })


});
