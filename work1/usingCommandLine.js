// #Ödev 1: Komut satırı kullanımı çalışması 

// https://app.patika.dev/courses/nodejs/odev1

const arguments = process.argv.slice(2);

function circleArea(r){
    S = Math.PI * r * r;   
    console.log('Yarı çapı ' + r + ' olan dairenin alanı: ' + S)
    
}

circleArea(arguments[0]);


//ödev 3 ile birleşim yeri...
function circleCircumference(r) {
    C = 2 * Math.PI * r;
    console.log('Yarı çapı ' + r + ' olan dairenin çevresi: ' + C)
}

circleCircumference(arguments[0]);