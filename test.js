// function sapa(){
//     return "Sandy";
// }

// console.log(sapa());


// function sayHello(name, name2) {
//     console.log("Hello " + name + " dan " + name2 + "!");
//   }


// sayHello("Sandy", "Reza");


// const person = {
//     name: "Sandy",
//     age: 23,
//     address: "Bogor",
//     hobbies: ["reading", "traveling", "coding"],
//     greet: function() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     },

//     //Alternatif : 
//     // greet: function() { 
//     // return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
//     // }

//     updateAddress: function(newAddress) {
//         this.address = newAddress;
//     }
// };

// // Contoh penggunaan
// console.log(person.greet()); // Output: Hello, my name is Sandy and I am 23 years old.

// // Update address
// person.updateAddress("Jakarta");
// console.log(`Updated address: ${person.address}`); // Output: Updated address: Jakarta

// // Menampilkan hobi
// console.log(`Hobbies: ${person.hobbies.join(", ")}`); // Output: Hobbies: reading, traveling, coding




// let nilai = 65;
// if (nilai >= 80){
//     console.log("Nilai A");
// }
// if (nilai >= 70 && nilai < 80){
//     console.log("Nilai B");
// }
// if (nilai >= 60 && nilai < 70){
//     console.log("Nilai C");
// }
// else console.log("Nilai D");




// function getGrade(nilai) {
//     if (nilai >= 80) {
//         return "Nilai A";
//     }
//     if (nilai >= 70 && nilai < 80) {
//         return "Nilai B";
//     }
//     if (nilai >= 60 && nilai < 70) {
//         return "Nilai C";
//     }
//     return "Nilai D";
// }

// // Contoh pengujian
// console.log(getGrade(85)); // Output: Nilai A
// console.log(getGrade(75)); // Output: Nilai B
// console.log(getGrade(65)); // Output: Nilai C
// console.log(getGrade(50)); // Output: Nilai D




// function checkShalat(shalat) {
//     if (shalat === 0) {
//         return "Kafir";
//     }
//     if (shalat > 0 && shalat <= 2) {
//         return "Amatir";
//     }
//     return "Beriman";
// }

// // Contoh pengujian
// console.log(checkShalat(0)); // Output: Kafir
// console.log(checkShalat(1)); // Output: Amatir
// console.log(checkShalat(2)); // Output: Amatir
// console.log(checkShalat(3)); // Output: Beriman
// console.log(checkShalat(5)); // Output: Beriman


// function aktivitasHari(hari) {
//     switch (hari.toLowerCase()) {
//         case "senin":
//             return "Upacara";
//         case "selasa":
//         case "rabu":
//         case "kamis":
//         case "jumat":
//             return "Kerja";
//         case "sabtu":
//         case "minggu":
//             return "Libur";
//         default:
//             return "Hari tidak valid";
//     }
// }

// // Contoh pengujian
// console.log(aktivitasHari("Senin")); // Output: Upacara
// console.log(aktivitasHari("Rabu"));  // Output: Kerja
// console.log(aktivitasHari("Minggu")); // Output: Libur
// console.log(aktivitasHari("Holiday")); // Output: Hari tidak valid

// function getGrade(nilai) {
//     switch (true) {
//         case nilai >= 80:
//             return "Nilai A";
//         case nilai >= 70:
//             return "Nilai B";
//         case nilai >= 60:
//             return "Nilai C";
//         default:
//             return "Nilai D";
//     }
// }

// // Contoh pengujian
// console.log(getGrade(85)); // Output: Nilai A
// console.log(getGrade(75)); // Output: Nilai B
// console.log(getGrade(65)); // Output: Nilai C
// console.log(getGrade(50)); // Output: Nilai D



// Array untuk lemari
// const lemari = [
//     ["Baju Kerja", "Baju Santai", "Jaket"], // Rak 1
//     ["Celana Jeans", "Celana Pendek", "Celana Panjang"], // Rak 2
//     ["Sepatu", "Sandal", "Kaos Kaki"], // Rak 3
// ];

// // Menampilkan isi lemari
// console.log("Isi Rak 1:", lemari[0]); // Output: Isi Rak 1: [ 'Baju Kerja', 'Baju Santai', 'Jaket' ]
// console.log("Isi Rak 2:", lemari[1]); // Output: Isi Rak 2: [ 'Celana Jeans', 'Celana Pendek', 'Celana Panjang' ]
// console.log("Isi Rak 3:", lemari[2]); // Output: Isi Rak 3: [ 'Sepatu', 'Sandal', 'Kaos Kaki' ]

// // Menambahkan item baru ke Rak 1 di akhir
// lemari[0].push("Baju Tidur");
// console.log("Rak 1 setelah ditambah:", lemari[0]); // Output: Rak 1 setelah ditambah: [ 'Baju Kerja', 'Baju Santai', 'Jaket', 'Baju Tidur' ]

// // Menambahkan item baru ke Rak 1 di awal
// lemari[0].pop(); // Menghapus item terakhir
// console.log("Rak 1 setelah dihapus:", lemari[0]); // Output: Rak 1 setelah dihapus: [ 'Baju Kerja', 'Baju Santai', 'Jaket' ]    


// lemari[0].unshift("Baju Tidur");
// console.log("Rak 1 setelah ditambah:", lemari[0]); // Output: Rak 1 setelah ditambah: [ 'Baju Tidur', 'Baju Kerja', 'Baju Santai', 'Jaket'  ]

// // Menghapus item dari Rak 2
// lemari[1].splice(1, 1); // Menghapus "Celana Pendek"
// console.log("Rak 2 setelah dihapus:", lemari[1]); // Output: Rak 2 setelah dihapus: [ 'Celana Jeans', 'Celana Panjang' ]

// // Menambahkan item baru ke posisi tertentu di Rak 0 (misalnya, posisi ke-2)
// lemari[0].splice(2, 0, "Kemeja"); // Menambahkan "Kemeja" di posisi ke-2
// console.log("Rak 0 setelah ditambah di posisi ke-2:", lemari[0]);
// // Output: Rak 0 setelah ditambah di posisi ke-2: [ 'Baju Tidur', 'Baju Kerja', 'Kemeja', 'Baju Santai', 'Jaket']

// // Mengakses item tertentu
// console.log("Item di Rak 3, Posisi 2:", lemari[2][1]); // Output: Item di Rak 3, Posisi 2: Sandal




// const rak = ["Baju Kerja", "Baju Santai", "Jaket"];

// for (let i = 0; i < rak.length; i++) {
//     console.log(`Item di Rak ${i + 1}: ${rak[i]}`);
// }
// // Output:
// // Item di Rak 1: Baju Kerja
// // Item di Rak 2: Baju Santai
// // Item di Rak 3: Jaket

// const lemari = [
//     ["Baju Kerja", "Baju Santai", "Jaket"], // Rak 1
//     ["Celana Jeans", "Celana Pendek", "Celana Panjang"], // Rak 2
//     ["Sepatu", "Sandal", "Kaos Kaki"], // Rak 3
// ];

// let totalItem = 0;
// let i = 0;

// while (i < lemari.length) {
//     totalItem += lemari[i].length;
//     i++;
// }

// console.log(`Total item di lemari: ${totalItem}`);
// // Output: Total item di lemari: 9

// let rak2 = [];
// let kapasitasRak = 3;
// let item = 0;

// do {
//     rak2.push(`Item ${item + 1}`);
//     item++;
// } while (rak.length < kapasitasRak);

// console.log("Isi Rak:", rak2);
// Output: Isi Rak: [ 'Item 1', 'Item 2', 'Item 3' ]


// for:
// Digunakan untuk iterasi dengan jumlah langkah yang diketahui.
// Contoh: Menampilkan isi rak berdasarkan indeks.

// while:
// Digunakan untuk iterasi dengan kondisi yang harus terpenuhi.
// Contoh: Menghitung total item di lemari hingga semua rak selesai dihitung.

// do...while:
// Digunakan untuk memastikan blok kode dijalankan setidaknya sekali sebelum memeriksa kondisi.
// Contoh: Menambahkan item ke rak hingga kapasitas rak terpenuhi.





// 1. Buatkan validasi klo palindrom true 
// 2. Buatkan validasi klo palindrome false
// 3. Klo string kosong 0
// 4. klo string + angka -1

// function validate(input) {
//     // Jika input kosong
//     if (input === "") {
//         return 0;
//     }

//     // Jika input mengandung angka
//     if (/\d/.test(input)) {
//         return -1;
//     }

//     // Validasi palindrome
//     const reversed = input.split("").reverse().join("");
//     if (input === reversed) {
//         return true; // Palindrome
//     } else {
//         return false; // Bukan palindrome
//     }
// }

// // Contoh pengujian
// console.log(validate("madam")); // Output: true (Palindrome)
// console.log(validate("hello")); // Output: false (Bukan palindrome)
// console.log(validate(""));      // Output: 0 (String kosong)
// console.log(validate("abc123")); // Output: -1 (Mengandung angka)

let fruit = [
    "apel",
    "Jeruk",
    "Anggur"
];

for (let i = 0; i < fruit.length; i++) {
    console.log(`Nama buah: ${fruit[i]}`);
    console.log(`Jumlah huruf: ${fruit[i].length}`);
}

let fruits = [
    [
        "apel",
        "Jeruk",
        "Anggur"
    ]
];


for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits[i].length; j++) {
        console.log(`Nama buah: ${fruits[i][j]}`);
        console.log(`Jumlah huruf: ${fruits[i][j].length}`);
    }
}
