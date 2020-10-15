<<<<<<< HEAD
=======
const subsTable = document.getElementById("subsTable");
const yourSubs = document.getElementById("yourSubs");
const monthlyTotal = document.getElementById("monthlyTotal");

async function services() {
  subsTable.innerHTML = "";
  return $.get("/api/services").then(data => {
    for (let i = 0; i < 10; i++) {
      const subName = data[i].name;
      const subPrice = data[i].price;
      const subCategory = data[i].category;
      const subIcon = data[i].icon;

      const tr = document.createElement("tr");
      const tdSub = document.createElement("td");
      const tdCategory = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdAdd = document.createElement("td");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");
      const iTag = document.createElement("i");

      iTag.classList.add("fas", "fa-plus");

      button.classList.add("addBtn");
      button.setAttribute("id", data[i].id);
      button.addEventListener("click", function() {
        $.ajax({
          method: "POST",
          url: "api/members/" + this.id
        }).then(() => {
          yourServices();
          sumTotal();
        });
      });

      img.setAttribute("src", subIcon);
      img.setAttribute("alt", subName);
      img.setAttribute("id", "logos");
      img.classList.add("imgLogo");

      tr.classList.add("row", "text-center");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdCategory.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      figCaption.append(subName);
      figure.append(img, figCaption);
      tdSub.append(figure);

      tdCategory.append(subCategory);
      tdPrice.append(subPrice);

      button.append(iTag);
      tdAdd.append(button);

      tr.append(tdSub, tdCategory, tdPrice, tdAdd);
      subsTable.append(tr);
    }
  });
}

async function userSubs() {
  return $.get("/api/usersubs").then(data => {
    console.log(data);
    const rows = [];
    for (let i = 0; i < data.length; i++) {
      const subName = data[i].Sub_Service.name;
      const subPrice = data[i].Sub_Service.price;
      const subCategory = data[i].Sub_Service.category;
      const subIcon = data[i].Sub_Service.icon;

      const tr = document.createElement("tr");
      const tdSub = document.createElement("td");
      const tdCategory = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdAdd = document.createElement("td");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");
      const iTag = document.createElement("i");

      iTag.classList.add("fas", "fa-minus");

      button.classList.add("removeBtn");
      button.setAttribute("id", data[i].id);
      button.addEventListener("click", function() {
        $.ajax({
          method: "DELETE",
          url: "api/usersubs/" + this.id
        }).then(() => {
          yourServices();
          sumTotal();
        });
      });

      img.setAttribute("src", subIcon);
      img.setAttribute("alt", subName);
      img.setAttribute("id", "logos");
      img.classList.add("imgLogo");

      tr.classList.add("row", "text-center");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdCategory.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      figCaption.append(subName);
      figure.append(img, figCaption);
      tdSub.append(figure);

      tdCategory.append(subCategory);
      tdPrice.append(subPrice);

      button.append(iTag);
      tdAdd.append(button);

      tr.append(tdSub, tdCategory, tdPrice, tdAdd);
      rows.push(tr);
    }
    return rows;
  });
}

async function customSubs() {
  return $.get("/api/customservices").then(data => {
    const rows = [];
    for (let i = 0; i < data.length; i++) {
      const subName = data[i].name;
      const subPrice = data[i].price;
      const subDescription = data[i].description;
      // const subIcon = data[i].icon

      const tr = document.createElement("tr");
      const tdSub = document.createElement("td");
      const tdDescription = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdAdd = document.createElement("td");
      const button = document.createElement("button");
      const img = document.createElement("img");
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");
      const iTag = document.createElement("i");

      iTag.classList.add("fas", "fa-minus");

      button.classList.add("removeBtn");
      button.setAttribute("id", data[i].id);
      button.addEventListener("click", function() {
        $.ajax({
          method: "DELETE",
          url: "api/customservice/" + this.id
        }).then(() => {
          yourServices();
          sumTotal();
        });
      });

      img.setAttribute("src", "/img/penOnPaper.png");
      img.setAttribute("alt", subName);
      img.setAttribute("id", "logos");
      img.classList.add("imgLogo");

      tr.classList.add("row", "text-center", "m-3");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdDescription.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      figCaption.append(subName);
      figure.append(img, figCaption);
      tdSub.append(figure);

      tdDescription.append(subDescription);
      tdPrice.append(subPrice);

      button.append(iTag);
      tdAdd.append(button);

      tr.append(tdSub, tdDescription, tdPrice, tdAdd);
      rows.push(tr);
    }
    return rows;
  });
}

async function yourServices() {
  yourSubs.innerHTML = "";
  const [userSubsData, customSubsData] = await Promise.all([
    userSubs(),
    customSubs()
  ]);
  yourSubs.append(...customSubsData, ...userSubsData);
}

async function sumTotal() {
  monthlyTotal.innerHTML = "";
  $.get("/api/usersum").then(data => {
    monthlyTotal.innerHTML = `<h1>Monthly Total: $${data}</h1>`;
    console.log(data);
  });
}

>>>>>>> 7deee05f52fa6a5c9cb31db4a7dd5b244649d234
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
<<<<<<< HEAD
=======

  services();
  yourServices();
  sumTotal();
>>>>>>> 7deee05f52fa6a5c9cb31db4a7dd5b244649d234
});
