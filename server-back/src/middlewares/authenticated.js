const authenticated = (req, res, next) => {
    const token = req.headers.authorization;  //busca el valor que viene en el header HTTP llamado authorization desde postman etc
    if (!token || token !== "mi_token_secreto") {       // si no se envio el token o si es incorrecto devuelve el error si es correcto permite el acceso
        return res.status(401).json({ message: "No autorizado" });
    }
    next();  // permite continuar el proceso si todo esta bien
}

module.exports = authenticated;