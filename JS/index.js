import {geometricas} from "./geometricas.js"; // importamos nuestra librerioa que calcula figurar


// le pasamos como parametro : ladoCuadrado,3lados del triangulo
let figuras =geometricas(5,4,4,2); 
//nos devolvera un array con objetos,estos obj tienen el area,perimetro y nombre de la figura


//creamosuna funcion qué busca la figura con un nombre que le demos
function buscarFigura(figuraNombre){
    let figuraResuelta
    figuras.forEach(function(figura){  //recorremos el array 
        if(figura.nombre === figuraNombre){ // si el array con la propiedad nombre esta la que buscamos
            figuraResuelta = figura; // en figura resuelta guaramos el obj de la figura encontrada
        }
    })

    return figuraResuelta //retornamos solo el obj de la figura que queremos
}

function buscarCuadrado(){ // creamos una función para buscar el cuadrado
    console.log(buscarFigura("cuadrado"));
}

buscarCuadrado()
