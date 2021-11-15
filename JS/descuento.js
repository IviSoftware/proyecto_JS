export function precioReal(precio,descuento){
    let realPrecio=(precio*(100-descuento))/100;
    return realPrecio
}