/* eslint-disable no-unused-vars */
const subsTable = document.getElementById("subsTable");
const yourSubs = document.getElementById("yourSubs");
const monthlyTotal = document.getElementById("monthlyTotal");

async function services() {
  subsTable.innerHTML = "";
  return $.get("/api/services").then(data => {
    for (let i = 0; i < data.length; i++) {
      const subName = data[i].name;
      const subPrice = data[i].price;
      const subCategory = data[i].category;
      const subIcon = data[i].icon;
      const subLink = data[i].link;

      const a = document.createElement("a");
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

      a.setAttribute("href", subLink);
      img.setAttribute("src", subIcon);
      img.setAttribute("alt", subName);
      img.setAttribute("id", "logos");
      img.classList.add("imgLogo");

      tr.classList.add("col-12", "row", "text-center");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdCategory.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      tr.setAttribute("style", "border-bottom: 1px solid  #B9B7B7;");
      tdSub.setAttribute("style", "width:100px; height:100px;");

      a.append(img);
      figCaption.append(subName);
      figure.append(a, figCaption);
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

      tr.classList.add("col-12", "row", "text-center");
      tdSub.classList.add("col-3", "d-none", "d-sm-block");
      tdCategory.classList.add("col-3", "d-none", "d-sm-block");
      tdPrice.classList.add("col-3", "d-none", "d-sm-block");
      tdAdd.classList.add("col-3", "d-none", "d-sm-block");

      tr.setAttribute(
        "style",
        "border-bottom: 1px solid  #B9B7B7; line-height"
      );
      tdSub.setAttribute("style", "width:100px; height:100px;");

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
      tdAdd.classList
        .add("col-3", "d-none", "d-sm-block")
        .css("background-color:none");

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
    monthlyTotal.innerHTML = `<p>Monthly Total: $${data}</p>`;
    console.log(data);
  });
}

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  services();
  yourServices();
  sumTotal();
});
document.getElementById("addCustom").onclick = function() {
  location.href = "/custom_services";
};

//Added styling JS
const navSlide = () => {
  const mobileView = document.querySelector(".mobile-view");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  mobileView.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 2.5s ease forwards ${index / 5 +
          0.1}s`;
      }
    });
    //Mobile view animation
    mobileView.classList.toggle("toggle");
  });
};

navSlide();

function myFunction() {
  /* Get the text field */
  const copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
