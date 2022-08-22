
    //SCRIPT PARA CALCULAR IMC

	calcular = document.getElementById("calcular");
    Fecha = document.getElementById("Fecha");
    Nombre = document.getElementById("Nombre");
	Peso = document.getElementById("Peso");
	Estatura = document.getElementById("Estatura");
	imc = document.getElementById("imc");
	estado = document.getElementById("estado");

	calcular.onclick = function(){
		if(Peso.value!="" && Estatura.value!="" &&Fecha.value!="" &&Nombre.value!=""){
			imcx = (Peso.value / (Estatura.value* Estatura.value));
			imc.innerHTML = imcx
			console.log(imcx);

			if(imcx<18.5){ estado.innerHTML = "Peso inferior al normal"; }
			else if(imcx>=18.5 && imcx<=24.9){ estado.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.9){ estado.innerHTML = "Peso superior al normal"; }
			else if(imcx>30){ estado.innerHTML = "Obesidad"; }

		}else{
			alert("Debes ingresar todos los datos.")
		}
    };

    // class Paciente{
    //     constructor(nombre, edad, peso, estatura, imc, grado){
    //     this.nombre = nombre;
    //     this.edad = edad;
    //     this.peso = peso;
    //     this.estatura = estatura;
    //     this.imc = imc;
    //     this.grado = grado;
    //     }
    // }
    
    // function crearPaciente(){

    //         let nombre = document.getElementById("txtNombreUsuario").value;
    //         let edad = parseFloat(document.getElementById("txtEdadUsuario").value);
    //         let peso= parseFloat(document.getElementById("txtPesoUsuario").value);
    //         let estatura = parseFloat (document.getElementById("txtEstaturaUsuario").value);
    //         let nuevoUsuario= new Paciente (nombre,edad,peso,estatura);
    //         return nuevoUsuario;
    //     }
    // const nuevoPaciente = crearPaciente(); //crea un nuevo paciente
    // console.log (nuevoPaciente);
    // const listaPacientes = []; // array vacio al que se le van agregar los pacientes creados.
    
    // function agregarPacientes (paciente,arr) { arr.push (paciente)} //agrega el paciente nuevo al array listaPaciente.
    // agregarPacientes (nuevoPaciente,listaPacientes);
    
    
    // let imc; //creamos let para guardar un dato y ese dato sea el valor del objeto, lo declaramos porque va usasrse en un proceso.
    // //grado, no lo declaramos porque directamente se le asigna un resustado de la operacion.
    
    // function calcularImc(){
    // with (Math) {
    //     imc = nuevoPaciente.peso /pow(nuevoPaciente.estatura/ 100,2);
    //     imc = round(imc * 100) / 100;  // redondea con 2 decimales.
        
    //     nuevoPaciente.imc = imc
    // }

    // if (nuevoPaciente.imc < 16) {
    //     nuevoPaciente.grado = "Delgadez severa.";
    // } else if (nuevoPaciente.imc >= 16 && nuevoPaciente.imc <= 16.99) {
    //     nuevoPaciente.grado = "Delgadez moderada.";
    // } else if (nuevoPaciente.imc >= 17 && nuevoPaciente.imc <= 18.49) {
    //     nuevoPaciente.grado = "Delgadez aceptable.";
    // } else if (nuevoPaciente.imc>= 18.5 && nuevoPaciente.imc <= 24.99) {
    //     nuevoPaciente.grado = "Normal.";
    // } else if (nuevoPaciente.imc >= 25 && nuevoPaciente.imc <= 29.99) {
    //     nuevoPaciente.grado = "Preobeso.";
    // } else if (nuevoPaciente.imc >= 30 && nuevoPaciente.imc <= 34.99) {
    //     nuevoPaciente.grado = "Obeso tipo I.";
    // } else if (nuevoPaciente.imc >= 35 && nuevoPaciente.imc <= 39.99) {
    //     nuevoPaciente.grado = "Obeso tipo II.";
    // } else if (nuevoPaciente.imc > 40 ) {
    //     nuevoPaciente.grado = "Obeso tipo III.";
    // } 

    // let resultado = ("Tu indice de masa corporal es: "+ nuevoPaciente.imc + " por lo que tu grado de obesidad es: " + nuevoPaciente.grado);

    // // alert (resultado); // Resultado.
    // document.getElementById(imc).innerHTML=resultado;
    // }


    // const edadMasVeinte = listaPacientes.filter(listaPacientes =>listaPacientes.edad > 20);

    // console.log(edadMasVeinte);

    // //find

    // const Edad = listaPacientes.find(pacientes => pacientes.edad > 10);

    // console.log(Edad);
