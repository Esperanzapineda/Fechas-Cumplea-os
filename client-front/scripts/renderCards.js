function usuarioService(data){
    const contenedorTargetas = document.getElementById("calendario");

    contenedorTargetas.innerHTML = ""; //limpiar el formulario antes si es necesario

    data.forEach(tarjeta => {
        const card = document.createElement("div");
        card.classList.add("card");

        const nombre = document.createElement("h3");
        nombre.textContent = tarjeta.nombre;

        const apellido = document.createElement("h3");
        apellido.textContent = tarjeta.apellido;

        const foto = document.createElement("img");
        foto.src = tarjeta.foto;

        const fechaNacimiento = document.createElement("p");
        fechaNacimiento.textContent = tarjeta.fechaNacimiento.slice(0,10);

        const sexo = document.createElement("p");
        sexo.textContent = tarjeta.sexo;

        //Se agrega todo a la tarjeta

        card.append(nombre, apellido, foto, fechaNacimiento, sexo);

        //se aañade todo al contenedor
        contenedorTargetas.appendChild(card);

    });
};

module.exports = usuarioService;