// PENGGUNAAN CONDITIONAL TERNARY

let nilaiBelanja = 50000;
let totalBelanja = 100000;
let hasilBelanja;

// daripada bikin command sperti ini, boros line
// if (nilaiBelanja >= totalBelanja){
//     hasilBelanja = 'anda dapat diskon 50%'; }

//     else if (nilaiBelanja <= totalBelanja && nilaiBelanja > 35000){
//         hasilBelanja = 'anda mendapat diskon 25% '; }
//     else {hasilBelanja = 'anda tidak mendapatkan diskon'; }

    // console.log ('Selamat '+ hasilBelanja);

// // // mending pake command ini, lebih singkat dan hemat line. dalam debugging lebih mudah
// hasilBelanja = (nilaiBelanja >= totalBelanja) ? 'Selamat anda mendapat diskon 50%' : 'anda tidak mendapatkan diskon';
// console.log (hasilBelanja);

var fami = ['niko','naunx','dian','ode','rino'];
var noFami = 1;

for (let i = 0; i < fami.length; i++){
    console.log('Penumpang no.'+ (i+1) + ' ' +fami[i]);
}
