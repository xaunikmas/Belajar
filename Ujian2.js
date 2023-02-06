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

let code = "DISCOUNT10%";
let price = 750000;
let total;

switch (code.toLowerCase()) {
  case "discount10%":
    if (price >= 500000) {
      total = price * 0.9
    } else if (price >= 300000 && price < 500000) {
      total = price * 0.95;
    } else {
      total = price * 0.975;
    }
    console.log("Total yang harus di bayar Rp. " + total + ".");
    break;

    
  case "discountharbolnas":
    if (price >= 250000) {
      total = price * 0.85;
    } else {
      total = price;
    }
    console.log("Total yang harus di bayar Rp. " + total + ".");
    break;
  default:
    console.log("Tidak terdapat promo code tersebut.");
}
