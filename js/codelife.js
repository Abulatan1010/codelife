// select togglebtn 
let togglebtn = document.getElementById('Toggletheme');

// listen to event

togglebtn.addEventListener("click", () =>{
    // toggle body to dark

    document.body.classList.toggle("dark");

    // change icon base on mode

    togglebtn.textContent =
    document.body.classList.contains('dark') ? "☀️" : "🌙";
});