const axios = require ("axios");

const API_URL = "http://localhost:3000/users";

async function obtenerUsuarios() {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
}

async function eliminarUsuario(id) {
    return axios.delete(`${API_URL}/${id}`);
}

// export async function actualizarUsuario(id, usuarioActualizado) {
//     return axios.put(`${API_URL}/${id}, usuarioActualizado);
// }

module.exports = {
    obtenerUsuarios,
    eliminarUsuario
}