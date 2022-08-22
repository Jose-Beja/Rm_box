// CREAMOS MODO OSCURO

const botonSwitch = document.querySelector ("#switch");

botonSwitch.addEventListener("click",() => {
  document.body.classList.toggle("dark");
  botonSwitch.classList.toggle("active");

  // GUARDAMOS EL MODO EN LOCALSTORAGE
  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark-mode", "true");
  } else{
    localStorage.setItem("dark-mode", "false");

  }
})

// BUSCAMOS EL MODO EN EL QUE NOS ENCONTRAMOS.

if(localStorage.getItem("dark-mode") === "true"){
  document.body.classList.add("dark");
  botonSwitch.classList.add("active");
} else{
  document.body.classList.remove("dark");
  botonSwitch.classList.remove("active");
}