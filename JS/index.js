import {geometricas} from "./geometricas.js"; // importamos nuestra librerioa que calcula figurar
import {calcularAltura} from "./geometricas.js"

let btnCuadrado = document.querySelector('#btnCuadrado');
let btnTriangulo = document.querySelector('#btnTriangulo');
let btnCirculo = document.querySelector('#btnCirculo');
let btnIso = document.querySelector('#btnIso');
let figuras;


//nos devolvera un array con objetos,estos obj tienen el area,perimetro y nombre de la figura


//creamos una funcion qué busca la figura con un nombre que le demos
function buscarFigura(figuraNombre){
    let figuraResuelta
    figuras.forEach(function(figura){  //recorremos el array 
        if(figura.nombre === figuraNombre){ // si el array con la propiedad nombre esta la que buscamos
            figuraResuelta = figura; // en figura resuelta guaramos el obj de la figura encontrada
        }
    })

    return figuraResuelta //retornamos solo el obj de la figura que queremos
}

btnCuadrado.addEventListener('click',()=>{
    let cuadradoLado = Number(document.querySelector('#cuadradoLado').value);
   figuras =geometricas(cuadradoLado,0,0,0,0,0); 
    let cuadrado = buscarFigura("cuadrado");
    let result = document.querySelector('.result');
    let span = document.createElement('span');
    span.innerHTML = `
        El area es : ${cuadrado.area_cuadrado} <br>
        El perimetro es: ${cuadrado.perimetro_cuadrado}
    
    `
    result.appendChild(span); 
})

btnTriangulo.addEventListener('click',()=>{
    let trianguloLado = Number(document.querySelector('#trianguloLado').value);
    let trianguloBase = Number(document.querySelector('#triangulobase').value);
   figuras =geometricas(0,trianguloLado,trianguloLado,trianguloBase,0,0); 
    let triangulo = buscarFigura("triangulo");
    let result = document.querySelector('.triangulo .result');
    let span = document.createElement('span');
    span.innerHTML = `
        El area es : ${triangulo.area_triangulo} <br>
        El perimetro es: ${triangulo.perimetro_triangulo}
    
    `
    result.appendChild(span); 
})


btnCirculo.addEventListener('click',()=>{
    let circuloRadio = Number(document.querySelector('#radioCirculo').value);
    let circuloDiametro = Number(document.querySelector('#diametroCirculo').value);
    figuras =geometricas(0,0,0,0,circuloDiametro,circuloRadio); 
    let circulo = buscarFigura("circulo");
    let result = document.querySelector('.circulo .result');
    let span = document.createElement('span');
    span.innerHTML = `
        El area es : ${circulo.area_circulo} <br>
        El perimetro es: ${circulo.perimetro_circulo}
    
    `
    result.appendChild(span); 
})

btnIso.addEventListener('click',()=>{
    let lado1 = Number(document.getElementById('isoLado2').value),
    lado2 = Number(document.getElementById('isoLado2').value),
    lado3 = Number(document.getElementById('isoLado2').value)


    let altura = calcularAltura(lado1,lado2,lado3);
    let result = document.querySelector('.isosceles .result');
    let span = document.createElement('span');
    span.innerHTML = `
        La altura es : ${altura}
    `
    result.appendChild(span); 
})

