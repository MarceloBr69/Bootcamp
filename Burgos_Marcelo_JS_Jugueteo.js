
function parque_de_diversiones(){
    var alturaNino = 30;
    function muestraSiElNiñoPuedeSubirALaMontañaRusa() {
        if (alturaNino > 52){
            console.log("¡Súbete, chico!");
        }
        else{
            console.log("Lo siento, chico. Tal vez el próximo año");
        }
        muestraSiElNiñoPuedeSubirALaMontañaRusa();
    }
}  