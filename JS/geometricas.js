function calcularCuadrado(lado){
    let cuadrado = {
        nombre: "cuadrado",
        perimetro_cuadrado: lado * 4,
        area_cuadrado: lado * lado   
    }
    return cuadrado
}

function calcularTriangulo(lado,lado2,base){
    let triangulo = {
        nombre: "triangulo",
        perimetro_triangulo: lado + lado2 + base,
        area_triangulo: (base * lado) / 2   
    }
    return triangulo
}

function calcularCirculo(diametro,radio){
    let circulo={
        nombre:"circulo",
        perimetro_circulo: diametro * Math.PI,
        area_circulo: Math.PI * Math.pow(radio,2)
    }
    return circulo
}

export function geometricas(cuadradoLado,trianguloLadoOne,trianguloLadoTwo,trianguloLadoThree,diametro,radio){
    const geometricasArr = [];  
    geometricasArr.push(calcularCuadrado(cuadradoLado));
    geometricasArr.push(calcularTriangulo(trianguloLadoOne,trianguloLadoTwo,trianguloLadoThree))
    geometricasArr.push(calcularCirculo(diametro,radio))
    return geometricasArr
}
