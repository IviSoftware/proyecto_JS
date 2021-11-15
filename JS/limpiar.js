export function clear(nodo){
    let existe = !!document.getElementById(nodo);
    if(existe){
        let nodoToDelete = document.getElementById(nodo);
        nodoToDelete.remove();
    }
}