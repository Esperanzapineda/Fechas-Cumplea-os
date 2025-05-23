const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema ({
    nombre: { type: String, require: true},
    apellido: { type: String, require: true},
    fechaNacimiento: { type: Date, require: true},
    sexo: { type: String, require: true},
    foto: { type: String, require: true }
});

const User = mongoose.model("User", usersSchema, "Usuario");

module.exports = User;