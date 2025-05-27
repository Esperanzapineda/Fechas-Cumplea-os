const {eliminarUsuario, obtenerUsuarios} = require("./usuarioService");

//funcion principal, inicializa la logica para eliminar un usuario
function inicioEliminarUsuario() {
    //se obtienen los elementos del DOM
    const select = document.getElementById("usuario-select");
    const btnEliminar = document.getElementById("btn-eliminar");

    if(!select || !btnEliminar) return; //si los elementos no existen en el DOM se detiene la ejecucion

    //funcion que carga los usuarios y los agrega al select
    async function cargarUsuarios(){
        try {
            const usuarios = await obtenerUsuarios();
            select.innerHTML = '<option value=""> ✓ Selecciones un usuario </option>'; //limpiamos y colocamos una opcion por defecto
            //creamos una opcion en el select por cada usuario
            usuarios.forEach(usuario => {
                const opcion = document.createElement("option");
                opcion.value = usuario._id;
                opcion.textContent = `${usuario.nombre} ${usuario.apellido}`;
                select.appendChild(opcion);
            });
        } catch (error) {
            console.error("Error al cargar usuarios:", error);
        }
    }

    //asignamos una evento al boton para eliminar el usuario seleccionado
    btnEliminar.addEventListener("click", async () => {
        const id = select.value;

        //validamos que se haya seleccionado un usuario
        if(!id){
            alert("Por favor, seleccona un id para eliminar");
            return
        }

        try {
            await eliminarUsuario(id); //llamamos al servicio para eliminar el usuario
            alert("Usuario eliminado con exito");
            await cargarUsuarios(); //recargamos la lista despues de eliminar un usuario
        } catch (error) {
            console.error("Error al eliminar el usuario");
            alert("Hubo un error al eliminar el usuario");
        }
    });

    //cargar la lista de usuarios al iniciar para llenar el select
    cargarUsuarios();
}

module.exports = inicioEliminarUsuario;