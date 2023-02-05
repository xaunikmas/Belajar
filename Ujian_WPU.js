// METODE LENGTH PADA JS
var nama = ['niko', 'naunx', 'dian', 'astri'];
console.log (nama.length);


// METODE JOIN PADA ARRAY
var nama =['niko', 'naunx', 'akram', 'aric', 'fatih'];
console.log (nama.join(' * '));

// METODE PUSH. menambahkan elemen baru pada array

nama.push ('rino', 'kiting');
console.log (nama.join(' * '));

// METODE POP, mengurangi elemen trakhir dari sebuah array
nama.pop ();
console.log (nama.join(' * '));

// UNSHIFT, Menambahkan elemen awal dari array
nama.unshift('koko');
console.log (nama.join(' * '));

// SHIFT, menghilangkan elemen awal dari array
nama.shift();
console.log (nama.join(' * '));

// SPLICE, MENAMBAH BEBERAPA ELEMEN PADA ARRAY
var namaku =['niko', 'naunx', 'akram', 'aric', 'fatih'];
namaku.splice(0,0, 'rino'); 
console.log (namaku.join(' * '));

// SLICE, MENGURANGI BEBERAPA ELEMEN PADA ARRAY
var namaku =['rino', 'niko', 'naunx', 'akram', 'aric', 'fatih', 'kebo', 'esbeye'];
var namaSlice = namaku.slice(6, 8);
console.log(namaSlice.join(' * '));


// MENAMPILKAN ISI ARRAY

// var nama = ['rino', 'niko', 'naunx', 'dian', 'astri'];
// nama.push('esbeye', 'kebo');

// for (var i = 0; i < nama.length; i++){
//     console.log ('Mahasiswa ke ' + (i+1) + ' ' + nama[i]); }

//METODE FOR EACH, UNTUK MELALUKAN LOOPING PADA ARRAY
// var nama = ['rino', 'niko', 'naunx', 'dian', 'astri'];
// nama.forEach(function(a, b){
//     console.log (a + ' adalah ' + 'penumpang ke: ' + (b+1)); })

var Angka = [1,2,3,4,5,6];
Angka.forEach(function(i){
    console.log (i + ' adalah angka ke: ' + i);} )