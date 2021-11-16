import { precioReal } from "./descuento.js";




export function cupon(user_cupon ,user_precio){
    const cupones = [
        {name:"primerC2pra",descuento:20},{name:"cliet5",descuento:50},{name:"ho5la",descuento:10}
    ];
    let real;
    cupones.forEach((cupon)=>{
        if(cupon.name == user_cupon){
             real = precioReal(user_precio,cupon.descuento)
        }
        else{
            real="Ese cupon no existe";
        }
    })
    return real
    
}