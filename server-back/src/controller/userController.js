const userService = require("../service/userService");

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(
            "error al buscar los usuarios"
        );
    }
};


const getUserById = async (req, res) => {
    const { id } = req.params;
    const usuario = await userService.getUserById(id);
    console.log(usuario);
    res.status(200).json(usuario);
};

const getUserOrden = async(req, res) => {
    try {
        const listaUsuarios = await userService.getUserOrden();
        res.status(200).json(listaUsuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error al obtener los usuarios por fecha de nacimiento"});
    }

};

const createUser =  async (req, res) => {
    const { nombre, apellido, fechaNacimiento, sexo, foto} = req.body;
    const newUser = await userService.createUser(nombre, apellido, fechaNacimiento, sexo, foto);
    res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const updateUser = await userService.updateUser(id, data);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).send("Error al actualizar el usuario");
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await userService.deleteUser(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).send("Error al eliminar el usuario")
    }
}

module.exports = {
    getUsers,
    getUserById,
    getUserOrden,
    createUser, 
    updateUser,
    deleteUser
}