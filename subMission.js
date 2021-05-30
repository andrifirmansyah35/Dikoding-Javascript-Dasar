// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// // TODO 2

// let a = 6;
// let b = 8;
// let c = 10;

// try{

//     if (isNaN(a)) {
//         throw new ValidationError("Argumen pertama harus number");
//     }
// if (isNaN(b)) {
//         throw new ValidationError("Argumen kedua harus number");
//     }
// if (isNaN(c)) {
//         throw new ValidationError("Argumen ketiga harus number");
//     }
//     const detectTriangle = (a, b, c) => {
//     // TODO 3
//     if (a === b && b === c) {
//         return 'Segitiga sama sisi';
//     }

//     if (a === b || a === c || b === c) {
//         return 'Segitiga sama kaki';
//     }

//     return 'Segitiga sembarang';
//     }
// }catch(error){
// 	if (error instanceof ValidationError) {
//         console.log(error.message);
//     }
// };


// function validateNumberInput(a,b,c){
//     if (isNaN(a)) {
//         throw new ValidationError("Argumen pertama harus number");
//     }
// if (isNaN(b)) {
//         throw new ValidationError("Argumen kedua harus number");
//     }
// if (isNaN(c)) {
//         throw new ValidationError("Argumen ketiga harus number");
//     }
// }


/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateInputNumber di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validaateInputNumber menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateInputNumber.
 */


// TODO 1
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
// TODO 2
function validateNumberInput(a,b,c){
    if (typeof a != 'number') {
        throw new ValidationError("Argumen pertama harus number");
    }
if (typeof b != 'number'){
        throw new ValidationError("Argumen kedua harus number");
    }
if (typeof c != 'number') {
        throw new ValidationError("Argumen ketiga harus number");
    }
}

const detectTriangle = (a, b, c) => {
  // TODO 3
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }

    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }

    return 'Segitiga sembarang';
 }

let a = 3;
let b = 4;
let c = false;

try{
    validateNumberInput(a,b,c);
    detectTriangle(a,b,c);
}catch(error){
    if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    }
}


// try{
// //   console.log(detectTriangle(a,b,c));
// //   validateNumberInput(a,b,c);
// }catch(error){
//   console.log(detectTriangle(a,b,c));
//   if (error instanceof ValidationError) {
//         console.log(error.message);
//     }
// }


