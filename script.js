  
const navUl = document.getElementById("navUl");
const navHamBurg = document.getElementById("navHamBurg");

const navLi = document.getElementsByClassName("navLi");

navHamBurg.addEventListener("click", (e) => {
  navUl.classList.toggle("active");
  e.preventDefault();
});

Array.from(navLi).forEach((elem) => {
  elem.addEventListener("click", () => {
    navHamBurg.click();
  });
});
// this is for after clicking on a home , about , it slide back to the normal 