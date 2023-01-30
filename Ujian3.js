/**
 * Study Case 2
 *
 * Harbolnas
 *
 * Sebuah website bernama "Maju Makmur", bergerak di bidang material. Memberikan diskon atau cashback dengan menggunakan promo code coupon tertentu.
 *
 * 1. Promo code "Discount10%"
 * - Jika pembelian di atas atau sama dengan 500000, maka akan diskon 10%
 * - Jika pembelian di antara 300000 sd 500000, maka akan diskon 5%
 * - Jika pembelian di bawah 300000, maka akan diskon 2.5%
 *
 * 2. Promo code "DiscountHarbolnas"
 * - Jika pembelian di atas atau sama dengan 250000, maka akan diskon 15%
 * - Jika pembelian di bawah 250000, maka akan diskon 0%
 *
 * Buatlah codingan dari persoalan tsb.
 *
 * Contoh:
 * Total harga = 750000
 * Menggunakan promo code "Discount10%",
 *
 * Result:
 * Total yang harus di bayarkan adalah Rp. 675000.
 */

let price = 750000;
let code = "Discount 10%";
let harga = "";

harga ? console.log ("anda mendapat diskon 10% dari pembelian total seharga "+ harga +" yaitu " + harga * 0.1); }
             else if (harga < price && harga == 30000){
          console.log ("anda mendapat diskon 5% "+ price * 0.05); }
             else if (harga <= 300000) {
          console.log("anda mendapat diskon 2.5%, sejumlah " + harga * 0.025); }
        else (console.log ("tidak ada diskon"));
