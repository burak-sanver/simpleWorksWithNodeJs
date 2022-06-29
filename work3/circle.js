// ODEV 3:
// Daire modüller dosyası
// Homework 3
// Circle modules file

function circleArea(r) {
    A = Math.PI * r * r;
    console.log('Yarı çapı ' + r + ' olan dairenin alanı: ' + A)
};

function circleCircumference(r) {
    C = 2 * Math.PI * r;
    console.log('Yarı çapı ' + r + ' olan dairenin alanı: ' + C)
};

module.exports = {
    circleArea,
    circleCircumference   
};