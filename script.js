"use strict";

const menuItems = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const userOpen = document.querySelector(".fa-caret-down");
const userMenu = document.querySelector(".user");
const content = document.querySelector(".content");

menuItems.addEventListener("click", () => {
  let invisible = sidebar.style.display === "none";

  if (invisible) {
    sidebar.style.display = "inline";
    content.style.left = "200px";
  } else {
    sidebar.style.display = "none";
    content.style.left = "0px";
  }
});

userOpen.addEventListener("click", () => {
  let closed = userMenu.style.display === "none";

  closed
    ? (userMenu.style.display = "block")
    : (userMenu.style.display = "none");
});
