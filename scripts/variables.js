/*
*
**
***
**** || VARIABLES || let, const, var ||
***
**
*
*/

// 1. let
// Yeniden değer atanabilir.
// Aynı scope içinde tekrar tanımlanamaz.

let variable1 = 20;
console.log(variable1)
variable1 = 30;
console.log(variable1)

//---------------------------------------------------//

// 2. const
// Yeniden değer atanamaz.
// Tanımlarken değer verilmelidir.
// Object veya Array içerikleri değiştirelebilir.

const firstName = "Efe"
console.log(firstName)


//---------------------------------------------------//

// 3. var 
// Yeniden değer atanabilir ve aynı isimle tekrar tanımlanabilir.
// Bu da bizim için çelişki yaratıyor.
// Function Scope kullanır.
// Modern Javascript'te kullanmaktan kaçınmak gerekiyor. 

var number = 25;
var number = 60;
console.log(number);

//---------------------------------------------------//

// 4. Block Scope
// {} arasında ki alana block denir.
// let ve const yalnızca tanımlandıkları scope içerisinde kullanılabilir.

{
    let score = 100;
    const level = 1;
}

// console.log(score); // ReferenceError bu böyle bir şey yaparsanız hata alırsınız.

//---------------------------------------------------//

// 5. TDZ (Temporal Dead Zone)
// let ve const tanımlanmdan önce kullanılamaz.
// Tanımlana satırına kadar olan bölge TDZ olarak adlandırılır.

// console.log(number1); // ReferenceError 
let number1 = 10;

//---------------------------------------------------//

// 6. HOISTING
// Javascript, değişken bilgilerini kendi kapsamnlarında inceler.
// var tanımlanmadan önce erişildiğin de undefined verir.
// let ve const tanımlanmadan önce erişilirse ise ReferenceError verir.

//---------------------------------------------------//

// 7. REASSIGNMENT vs REDECLARATION
// Reassignment; Mevcut değişkene yeni bir değer atar.
// Redeclaration; Aynı değişkeni yeniden tanımlamak.

let count = 1;
count = 2; // Reassignment

// let count = 3; // SyntaxError

//---------------------------------------------------//

// 8. const OBJECTS
// const nesnenin kendisini yeniden atamayı engeller.
// Nesnenin özelliklerini değiştirmeyi engellemez.

const user = {name: "Locky"};
user.name = "Plus"; // Geçerli

// user = {}; // TypeError

// BEST PRACTICE 
// Varsayılan olarak const değişkenini kullan.
// Yeniden atama gerekiyorsa let kullan.
// var kullanmaktan olabildiğince kaçın.
