// CONDITIONAL STUDY CASE, MENGGUNAKAN PENGULANGAN WHILE & FOR

// KITA PUNYA 10 ANGKOT, ADA 6 YG NORMAL DAN 4 DI BENGKEL. STUDY CASENYA:
// TAMPILKAN ANGKOT YANG NORMAL DAN YANG RUSAK, HANYA DENGAN MENGGUNAKAN PENGULANGAN "FOR"

var angkotNormal = 6;
total = 10;
noAngkot = 1;

for (var noAngkot = 1; noAngkot <= total; noAngkot++){
    if (noAngkot <= angkotNormal){
        console.log ('Angkot no. '+ noAngkot + ' beroperasi'); } 
    else {console.log ('Angkot no. ' + noAngkot + ' sedang di bengkel'); }
    }
