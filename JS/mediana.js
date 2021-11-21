export function mediana(){
    const arr = [450,500,600,700];
    let mitad;

    arr.sort(function(a, b) {
        return a - b;
      });

    if(arr.length % 2 === 0){
        mitad= (arr.length/2)-1;
        let getMediana = (arr[mitad]+arr[mitad+1])/2;
        console.log(getMediana)
    }else{
        mitad=(arr.length-1)/2;
        console.log(arr[mitad])
    }



}