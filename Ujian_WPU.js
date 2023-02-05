// METODE JOIN PADA ARRAY

var nama =['niko', 'naunx', 'akram', 'aric', 'fatih'];

console.log (nama.join(' * '));

// METODE PUSH. menambahkan elemen baru pada array

nama.push ('rino', 'kiting');
console.log (nama.join(' * '));

// METODE POP, mengurangi elemen trakhir dari sebuah array
nama.pop ();
console.log (nama.join(' * '));

// UNSHIFT, Menambahakn elemen awal dari array
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