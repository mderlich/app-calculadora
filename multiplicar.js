
function multiplicar(n1,n2){

    let resultado;

    if ( (n1 == 0) || (n2 == 0) ) {
        resultado = 0;
    }
    else {
        resultado = n1 * n2;
    }

    return resultado;
}

module.exports = multiplicar;