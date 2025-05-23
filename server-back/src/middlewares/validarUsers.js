module.exports = (req, res, next) => {
    const {nombre, apellido, fechaNacimiento, sexo, foto} = req.body;

    if(!nombre || !apellido || !fechaNacimiento || !sexo || !foto) {
        return res.status(400).json({ message: "Todos los campos son requeridos"});
    }

    //Validar fecha
    if(isNaN(Date.parse(fechaNacimiento))) {
        return res.status(400).json({ message: "La fecha de nacimiento no es valida"});
    }

    //validar sexo
    const opcionesValidas = ["masculino", "femenino"];
    if(!opcionesValidas.includes(sexo.toLowerCase())){
        return res.status(400).json({ message: "Sexo debe ser 'masculino' o 'femeino'."});
    }
    next();
}