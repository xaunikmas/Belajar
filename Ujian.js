// Conditional

// 1. Cek bilangan genap ato ganjil
// var number = 5;
// Result =
// 5 adalah bil ganjil

var numb = 5;
sum = (numb % 2 == 1)? numb + " adalah ganjil" : " adalah genap" ;
console.log(sum);

// ===================================================================

// 2. Cek score nilai
// school grade
// Grade A: score antara 100 - 85
// Grade B: score antara 84 - 70
// Grade C: score antara 69 - 55
// Grade D: score antara 54 - 40
// Grade E: score antara 39 - 0


var score = 84;

if(score <= 100 && score >= 85){
    console.log("Nilai anda Grade A ")}

    else if(score <= 85 && score >= 69 ) {
        console.log("Nilai anda Grade B "); }

    else if(score <= 70 && score >= 54) {
        console.log("Nilai anda Grade C "); }

    else if(score <= 55 && score >= 39) {
        console.log("Nilai anda Grade D "); }

    else if(score <= 40 && score >= 0) {
        console.log("Nilai anda Grade E "); }

    else
        {console.log("masukkan nilai yang benar "); } 
    

