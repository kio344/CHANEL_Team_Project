window.addEventListener("DOMContentLoaded", function() {

const checkbox = document.querySelector(".check");

  checkbox.addEventListener("click", function(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute("color-theme", "dark");
    console.log("ss");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
    console.log("ss");
  }
});
});