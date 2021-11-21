export function calcularMediaAritmetica(lista){
    /*let sumaLista = 0;

    for(let i=0; i<lista.length;i++){
        sumaLista = sumaLista + lista[i];
    }*/
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento)
        { //Cuando JS no envie nada por defecto tiene0
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}