const fs = require('fs');

const inicializarArchivo = () => {
    if (!fs.existsSync('citas.json')) {
        fs.writeFileSync('citas.json', '[]');
    }
};

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    inicializarArchivo();
    let citas = [];
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        citas = JSON.parse(data);
    } catch (error) {
        citas = [];
    }
    const cita = {
        nombre: nombre,
        edad: edad,
        animal: tipo,
        color: color,
        enfermedad: enfermedad
    };
    citas.push(cita);

    fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const leer = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        const citas = JSON.parse(data);
        citas.forEach((cita) => {
            console.log(cita);
        });
    } catch (error) {
        console.log("No hay citas registradas o el archivo no existe");
    }
};

module.exports = { registrar, leer };