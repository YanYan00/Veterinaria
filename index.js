const { argv } = require('process');
const {registrar,leer} = require('./operaciones.js');


if (argv[2] === 'registrar'){
    registrar(argv[3],argv[4],argv[5],argv[6],argv[7])
}
if (argv[2] === 'leer'){
    leer();
};