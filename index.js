// units: we will have in metric and imperial

function KmtoMConverter(length) {
    document.querySelector(".meters").innerHTML=length*1000;
}

//get the length in the smallest unit: cm for metric, in for imperial
//...yes I know mm is smaller than cm but who the f uses it lol
function getLowest(length, unit){
    return 0;
}

//get the length from a common unit to weird units
function toWeird(length, common){

}