let gatti = 76;
let gatti_in_fila = 10 ;

let file = Math.floor( gatti / gatti_in_fila);


let rimanenti = gatti  %  gatti_in_fila;

let mancanti = gatti_in_fila - rimanenti;

console.log(`Ci sono ${file} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${rimanenti}`);