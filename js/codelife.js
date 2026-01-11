function Myfunction (){
    alert('Login succesfully')
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});