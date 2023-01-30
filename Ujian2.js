// promo code "discount 10%", utk beli diatas ato = 500000, diskon 10%
// jika beli di antara 300000 sd 500000, diskon 5%
// beli di bawah 300000, diskon 2.5%


// promo code "Disount harbolnas", utk beli diatas ato = 250000, akan diskon 15%
// beli dibawah 250000, diskon 0%


var harga5  = 500000;
var harga25 = 300000; 

if(harga5 >= 500000){
    console.log ("discount 10% " + harga5 * 0.1);}

    else if (harga5 <= 500000 && harga5 == 500000) { 
        console.log ("discount 5% " + harga5 * 0.05); }
    
    
    else if (harga25 <= 300000 * 0.25) {
        console.log ("discount 2.5% " + harga25);
    }

