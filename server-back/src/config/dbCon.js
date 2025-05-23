const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Carga las variables de entorno

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://EsperanzaPineda:g9gP1em3LcnVHnZt@cluster0.qdn1u2p.mongodb.net/Usuario?retryWrites=true&w=majority&appName=Cluster0"
    );
};

module.exports = dbCon;