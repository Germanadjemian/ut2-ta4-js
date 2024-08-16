function sumaAll(a, b){
    if (b<a){
        return console.log("EL PRIMER NUMERO DEBE SER MENOR QUE EL SEGUNDO");
    }
    else{
        let suma = 0;
        for(i=a;i<=b;i++){
            suma+=i;
        }
        console.log(suma);
    }
}

sumaAll(1,4);