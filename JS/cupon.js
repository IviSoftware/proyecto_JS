import { precioReal } from "./descuento.js";




export function cupon(user_cupon ,user_precio){
    const cupones = [
        {name:"primerC2pra",descuento:20},{name:"cliet",descuento:50},{name:"ho5la",descuento:10}
    ];
    let real;
    cupones.forEach((cupon)=>{
        console.log(cupon.name == user_cupon)
        if(cupon.name == user_cupon){
             real = precioReal(user_precio,cupon.descuento)
        }
    })
    return real
    
}