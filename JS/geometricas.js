function calcularCuadrado(lado){
    let cuadrado = {
        nombre: "cuadrado",
        perimetro_cuadrado: lado * 4,
        area_cuadrado: lado * lado   
    }
    return cuadrado
}

function calcularTriangulo(lado){
    let triangulo = {
        nombre: "triangulo",
        perimetro_cuadrado: lado + lado + lado,
        area_cuadrado: lado * lado   
    }
    return triangulo
}

export function geometricas(cuadradoLado,trianguloLadoOne,trianguloLadoTwo,trianguloLadoThree){
    const geometricasArr = [];  
    geometricasArr.push(calcularCuadrado(cuadradoLado));
    geometricasArr.push(calcularTriangulo(trianguloLadoOne,trianguloLadoTwo,trianguloLadoThree))

    return geometricasArr
}
