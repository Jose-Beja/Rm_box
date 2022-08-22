guardarLoclStorage();


 let nombre = prompt("Ingresa tu nombre");
 
 //creamos dom para nombre de usuario.
 // document.querySelector("h1")
 // console.log(document.getElementById("titulo"))
 
 const h1 = document.querySelector("h1");
 h1.textContent = "Bienvenido" + " " + nombre;
 
localStorage.setItem("usuario", nombre);