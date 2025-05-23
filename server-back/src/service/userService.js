const User = require("../models/User");

const getUsers = async () => {
    const usuario = await User.find();
    return usuario;
};

const getUserOrden = async(fechaNacimiento) => {
    const listaUsuarios = await User.find().sort({fechaNacimiento: 1});
    return listaUsuarios;
};

const getUserById =  async (id) => {
    const usuario = await User.findById(id);
    return usuario;
};

const createUser = async (nombre, apellido, fechaNacimiento, sexo, foto) => {
    const nuevoUser = new User ({ nombre, apellido, fechaNacimiento, sexo, foto});
    await nuevoUser.save();
    return nuevoUser;
};

const updateUser = async (id, data) => {
    const usuarioActualizado = await User.findByIdAndUpdate(id, data, {new: true});
    return usuarioActualizado;
};

const deleteUser = async (id) => {
    await User.findByIdAndDelete(id);
    return {mensaje: "Usuario eliminado"};
}

module.exports = {
    getUsers,
    getUserOrden,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}