const usuarioService = require("./renderCards");
const envioFormulario = require("./formulario");
const inicioEliminarUsuario = require("./eliminarUsuario");
const axios = require("axios");
const url = "http://localhost:3000/users/ordenados/fecha";

document.addEventListener("DOMContentLoaded", async() => {
    try {
        const respuesta = await axios.get(url);
        usuarioService(respuesta.data);
    } catch (error) {
        console.log("Error al obtener los datos del usuario:", error)
    }

    const formulario = document.getElementById("registro-cumpleaños");
    if(formulario){
        formulario.addEventListener("submit", envioFormulario);
    }

    const btnEliminar = document.getElementById("btn-eliminar");
    if(btnEliminar){
        inicioEliminarUsuario();
    }
});