import {geometricas} from "./geometricas.js"; // importamos nuestra librerioa que calcula figurar
import {calcularAltura} from "./geometricas.js";
import {clear} from "./limpiar.js";
import {precioReal} from "./descuento.js";
import {cupon} from "./cupon.js"
import {calcularMediaAritmetica} from "./promedio.js"
import {mediana} from "./mediana.js"
import {moda} from "./moda.js"

let btnCuadrado = document.querySelector('#btnCuadrado');
let btnTriangulo = document.querySelector('#btnTriangulo');
let btnCirculo = document.querySelector('#btnCirculo');
let btnIso = document.querySelector('#btnIso');
let btnDescuento = document.getElementById('btnDescuento');
let btnCupones = document.getElementById('btnCupones');
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
    
    clear("spanContainer");

    let span = document.createElement('span');
    span.id="spanContainer";
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
    clear("spanContainer");

    let span = document.createElement('span');
    span.id="spanContainer";
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
    clear("spanContainer")
    let span = document.createElement('span');
    span.id="spanContainer";
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
   
    clear("spanContainer");

    let span = document.createElement('span');
    span.id="spanContainer";
    span.innerHTML = `
        La altura es : ${altura}
    `
    result.appendChild(span); 
})

btnDescuento.addEventListener('click',()=>{
    let user_precio = Number(document.getElementById('precio').value);
    let user_descuento = Number(document.getElementById('descuento').value);
    let precio = precioReal(user_precio,user_descuento);

    let result = document.querySelector('.descuentos .result');
    clear("spanContainer");

    let span = document.createElement('span');
    span.id="spanContainer";
    span.innerHTML = `
        El precio que vas a pagar aplicado el descuento es : ${precio}
    `
    result.appendChild(span); 
    
})

btnCupones.addEventListener('click',()=>{
    let user_precio = Number(document.getElementById('precioCuponTxt').value);
    let cuponUser = document.getElementById('cuponUser').value;
    let precioConCupon = cupon(cuponUser,user_precio);

    let result = document.querySelector('.cupones .result');
    clear("spanContainer");

    let span = document.createElement('span');
    span.id="spanContainer";
    span.innerHTML = `
        El precio que vas a pagar aplicado el cupon es : $ ${precioConCupon}
    `
    result.appendChild(span);
})


console.log(calcularMediaAritmetica([3,65,2,423])) //calcula la media artimetica de un array
mediana()
moda();