var contenido = document.querySelector('#contenido')

function traer(){
    fetch('../js/json/personal.json')
        .then( res=> res.json() )
        .then( datos=>{
            // console.log(datos)
            tabla(datos)
        })
}

function tabla(datos){
    contenido.innerHTML =''
    for(let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML +=`
        <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.nick}</td>
            <td>${valor.nombre}</td>
            <td>${valor.edad}</td>
            <td>${valor.altura}</td>
            <td>${valor.profecion}</td>
        </tr>
        `
    }
}

