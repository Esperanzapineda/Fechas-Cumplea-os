const axios = require("axios");

const url = "http://localhost:3000/users";

const envioFormulario = async (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const sexo = document.getElementById("sexo").value;
    const foto = document.getElementById("foto").value;

    if(!nombre || !apellido || !fechaNacimiento || !sexo || !foto){
        alert("Por favor ingrese todos los datos");
        return;
    };

    const nuevoUsuario = {
        nombre, apellido, fechaNacimiento, sexo, foto
    };

    try {
        const respuesta = await axios.post(url, nuevoUsuario, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer mi_token_secreto"
            },
        });
        alert("Usuario creado exitosamente", respuesta.data);
    } catch (error) {
        console.log("Error al agregar el usuario");   
    }
};

module.exports =  envioFormulario;
