let informacionAtaudes = [
  {
    id: 1,
    precio: 350,
    nombre: "Básico",
    descripcion: ""
  },
  {
    id: 2,
    precio: 400,
    nombre: "Infantil",
    descripcion: ""
  },
  {
    id: 3,
    precio: 600,
    nombre: "Adulto",
    descripcion: ""
  },
  {
    id: 4,
    precio: 1000,
    nombre: "Senior",
    descripcion: ""
  }
];
function ataudes() {
  for (let i = 0; i < informacionAtaudes.length; i++) {
    vacio.innerHTML += `<div id="objeto${informacionAtaudes[i].id}" class="casilla"><img height="300px" width="300px" src="img/ataudes${i}.jpg"/><h1 class="texto">${informacionAtaudes[i].nombre}</h1><h1 class="texto">${informacionAtaudes[i].precio}</h1><button onclick="giro(${i})" class="bot" id="boton${informacionAtaudes[i]}">AÑADIR AL CARRITO</button></div>`;
    console.log(informacionAtaudes[i]);
  }
}
function giro(index) {
  document
    .getElementById(`objeto${informacionAtaudes[index].id}`)
    .classList.add("girar");
  document.getElementById(
    `objeto${informacionAtaudes[index].id}`
  ).innerHTML = `<div id="objeto${informacionAtaudes[index].id}" class="casillagirada"><h1 class="texto">${informacionAtaudes[index].nombre}</h1><h1>${informacionAtaudes[index].descripcion}</h1><button onclick="volver(${index})" class="bot" id="boton${informacionAtaudes[index]}">cerrar</button></div>`;
}
function volver(a) {
  document.getElementById(
    `objeto${informacionAtaudes[a].id}`
  ).innerHTML = `<div id="objeto${informacionAtaudes[a].id}" class="casillagirada"><img height="300px" width="300px" src="img/ataudes${a}.jpg"/><h1 class="texto">${informacionAtaudes[a].nombre}</h1><h1 class="texto">${informacionAtaudes[a].precio}</h1><button onclick="giro(${a})" class="bot" id="boton${informacionAtaudes[a]}">AÑADIR AL CARRITO</button></div>`;
  console.log(a);
}
