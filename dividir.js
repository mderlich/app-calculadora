function dividir(n1,n2){

    let resultado;

    if ( n2 == 0)  {
        resultado = "No se puede dividir por cero";
    }
    else {
        resultado = n1 / n2;
    }

    return resultado;
}

module.exports = dividir;