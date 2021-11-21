export function moda(){
    const lista1 =[1,4,6,2,4,2,4,2];

    const lista1Count={};

    lista1.map( // contamos cuantas veces se repiten y lo guardamos en un objeto
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento]+=1
            }else{
                lista1Count[elemento]=1;
            }
        }
    )
    console.log(lista1Count)

    //Procedemos a ordenar los array por la segunfa posicion ya que está contiene el número de veces que se repite
    const lista1Arr = Object.entries(lista1Count).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    );

    console.log(lista1Arr[lista1Arr.length-1])
}