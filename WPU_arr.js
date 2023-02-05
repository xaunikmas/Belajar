// MANIPULASI ARRAY 

// KEY AND VALUE PAIR

// MENAMPILKAN INDEX PADA ARRAY

// var binatang = ['kucing', 'babi', 'monyet'];
// var myArr3 = ['monyet', 10, true, [4,5,6]];
// console.log (binatang[2]);
// console.log (typeof (binatang));
// console.log (binatang.length);
// console.log (myArr3[3][1]); // ---> menampilkan index di dalem array

// MENAMPILKAN ISI ARRAY METHODE OBJECT

// var arrMe = [];
// arrMe[0] = 'niko';
// arrMe[1] = 'noviyanto';
// arrMe[2] = 'koko';
// arrMe[3] = 'xaunikmas';
// console.log (arrMe[2]);


// **METHOD YANG DISEDIAKAN JS UTK ARRAY** DENGAN LENGTH
// var arrMe = ['niko', 'noviyanto', 'koko', 'xaunikmas'];
// arrMe.push('codot', 'nixaumas');
// for (var i = 0; i < arrMe.length; i++){
      
//     console.log ('Mahasiswa ke ' + (i+1) + ': ' + arrMe[i]);
// } 

console.log ('*************************************************************\n');


// **METHOD YANG DISEDIAKAN JS UTK ARRAY** DENGAN JOIN
// MENGGABUNGKAN SLURUH ISI ARRAY DAN DIUBAH KE STRING
// CONTOH :

// var arrMe = ['niko', 'noviyanto', 'koko', 'xaunikmas'];
// console.log (arrMe.join(' * ')); // ----------------------------> hasilnya niko,noviyanto,koko,xaunikmas
// kalo mau diganti komanya dengan -, ato char lain, cukup tambahkan pada () stelah join. contoh: arrMe.join(-)

// **METHOD YANG DISEDIAKAN JS UTK ARRAY** DENGAN PUSH, POP, SHIFT, UNSHIFT
// PUSH menambah elemen baru di akhir array. array.push(...) --> apa string ato nilai nya

// POP menghilangkan element trakhir dari sebuah array. 

// UNSHIFT MENAMBAHKAN ELEMENT PERTAMA DARI SEBUAH ARRAY
// SHIFT MENGHILANGKAN ELEMENT PERTAMA DARI SEBUAH ARRAY
// MENAMBAHKAN ELEMEN DI TENGAH ARRAY, GIMANA? DENGAN SLICE DAN SPLICE

// SLICE MENGAMBIL BEBERAPA ELEMEN PADA ARRAY, MENJADI ARRAY BARU

// SPLICE MENYAMBUNG BEBERAPA ELEMEN PADA ARRAY
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2);

// LATIHAN SPLICE

// var arrayKu = ['niko', 'noviyanto', 'naunx', 'fatih'];
// arrayKu.splice(1, 0, );  --> (1 adalah elemen/index ke-n, 0 adalah ga ada yg dihapus, 'koko' value dari elemen barunya
                             // kalo ada yg mau dihapus, arrayKu.splice (1, 2 (adalah 2 elemen setelah penambahan elemen baru))
// console.log (arrayKu.join(' , ')); 

// LATIHAN SLICE
// rumus : 
// var arrayKu = ['niko', 'noviyanto', 'naunx', 'fatih', 'bagong', 'petruk'];
// var arrSlice = arrayKu.slice (1, 5); // --> 1 (adalah index ke -n), 5 (adalah index yg diambil seblum index ke -5)
// console.log (arrSlice.join(' . '));
// INGAT!!! ARRAY YG DI SLICE, AKAN MEMBUAT VARIABLE BARU



// METHOD FOREACH & MAP, UNTUK LOOPING PADA ARRAY. BISA MELAKUKAN SESUATU PADA ELEMEN DI DALEM ARRAY AUTOMATICALLY
// FOREACH
// var angka = [1,2,3,4,5];
var nama = ['niko', 'naunx', 'fatih', 'aric']; 
nama.push('rino', 'akram', 'ahsan');
// untuk array nama, niko, naunx, fatih dan aric, dianggap sebagai elemen. sedangkan index nya mulai dari 0,1,2,3. 

nama.forEach(function(e, i){    // e dianggap elemen, i dianggap index
    // pada fungsi, dibaca elemennya dulu baru kmudian index nya
    console.log ('Mahasiswa ke ' + (i+1) + ' adalah : ' + e);
});




