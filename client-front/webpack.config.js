module.exports = {
    entry: "./scripts/index.js",

    output: {                       //propiedad para guardar todo el resultado de salida
        path: __dirname + "/public",
        filename: "bundle.js",
    },
};