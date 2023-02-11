/* ES 6 adalah versi baru dari JS, dan last updated

- hoisting adalah proses syntax akan di jalankan dulu, jadi apabila kita buat x = 'angka'; tapi blum di declare   sbagai variable, maka akan menghasilkan error. tapi dengan teknik hoisting, apabila var baru di declare di bawah   tetap akan dijalnkan pertama kali

- hoisting akan berfungsi untuk var, kalo untuk let dan const tidak ada fungsi hoisting


var, let, const --> utk declare variable

*var fungsinya apa?*
ada fungsi/teknik hoisting, sperti dijelasin diatas.
1. (- hoisting adalah proses syntax akan di jalankan dulu, jadi apabila kita buat x = 'angka'; tapi blum di declare      sbagai variable, maka akan menghasilkan error. tapi dengan teknik hoisting, apabila var baru di declare di bawah      tetap akan dijalnkan pertama kali)
2. dapat di assign ulang
3. dapat di declare ulang


*const fungsinya apa?*
1. tidak dapat di assign ulang
2. digunakan untuk bikin variable angka exact


*let fungsinya apa? *
1. dapat diassign ulang
2. tidak dapat di declare ulang */



/* ADA 3 CARA DEKLARASI FUNCTION

1. FUNCT DECL
   function hello (){ console.log('hello'); }
   pada ES5 contoh : 
   function tambah (a, b){
   return a + b; }


2. FUNCT EXPRESSION
   const hello = function(){console.log('hello'); }


3. FUNCTION ARROW (ES6)
   const hello = () => {console.log('hello''); }
   pada ES6, contoh : const tambah = (a, b) => a + b;


   
*/


var nama = 'niko';
console.log(nama);

const angka = 10;
console.log(angka);



