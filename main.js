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
// presentar
body.innerHTML = `
  <header>
        <div id="logoFoto">
            <img src="../imagenes/logo(TuFuturo).png">
        </div>
        <nav class='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
            <ul>
              <li><a href='http://'>Inicio</a></li>
              <li><a class='dropdown-arrow' href='http://'>Servicios</a>
                <ul class='sub-menus'>
                  <li><a href='http://'>Ataudes</a></li>
                  <li><a href='http://'>Flores</a></li> 
                  <li><a href='http://'>Urna</a></li>
                </ul>
              </li>
              <li><a href='http://'>Planes</a></li>
              <li><a href='http://'>Contacto</a></li>
            </ul>
          </nav>
        </nav>
    </header>
    <main>
        <section id="inici">
            <div id="texto">
                <p class="mediano">A tu alcance</p>
                <p class="grande">TU MEJOR DESCANSO</p>
                <p class="pequeño">Quieres un descanso eterno y seguro? Ven a tu futuro</p>
                <p class="pequeño">el lugar donde tu seres queridos te despediran por ultima vez</p>
                <div id="boton_descubrelo_center">
                    <button id="boton_descubrelo">DESCÚBRELO</button>
                </div>
            </div>
            <div id="imagen_ataud_container">
                <img id="imagen_ataud" src="../imagenes/ataud.png">
            </div>
            <div id="flecha_container">
                <div class="flechita">&darr;</div>
            </div>
        </section>
        <section id="Servicios">
            <div class="container">
                <h2 class="titulo">SERVICIOS</h2>
            </div>
            <div class="container">
                <nav class="menu" id="menu_1">
                    <ul>
                      <li><a href='http://'>Ataudes</a></li>
                      <li><a href='http://'>Flores</a></li>
                      <li><a href='http://'>urnas</a></li>
                    </ul>
                </nav>
            </div>
            <div id="ataudes"></div>
        </section>
    </main>     
`;

// Menu
function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "9px";
  }
}

// presentar ataudes
mostrarAtaudes();
function mostrarAtaudes() {
  let ataudes = document.getElementById("ataudes");
  console.log(ataudes);
  console.log(informacionAtaudes);
  // informacionAtaudes.forEach( (e) => {
  //   ataudes.innerHTML += `
  //   <div id="objeto${informacionAtaudes[e].id}" class="casilla">
  //     <img height="300px" width="300px" src="img/ataudes${i}.jpg"/>
  //     <p class="texto">${informacionAtaudes[e].nombre}</p>
  //     <p class="texto">${informacionAtaudes[e].precio}</p>
  //     <button onclick="giro(${i})" class="bot" id="boton${informacionAtaudes[e].id}">Añadir al carrito</button>">
  //   </div>
  //   `;
  // });
  for (let i = 0; i < informacionAtaudes.length; i++) {
    ataudes.innerHTML += `
    <div id="objeto${informacionAtaudes[i].id}" class="casilla">
      <img height="300px" width="300px" src="img/ataudes${i}.jpg"/>
      <p class="texto">${informacionAtaudes[i].nombre}</p>
      <p class="texto">${informacionAtaudes[i].precio}</p>
      <button onclick="giro(${i})" class="bot" id="boton${informacionAtaudes[i].id}">Añadir al carrito</button>">
    </div>
    `;
  }
}
