// function funcOne(number) {

//     const randomNumber = Math.floor(Math.random() * 3);
//     if (randomNumber == 0) {
//         console.log('Bilgisayar : Taş')
//     } else if (randomNumber == 1) {
//         console.log('Bilgisayar : Kağıt')
//     } else {
//         console.log('Bilgisayar : Makas')
//     }

//     // Taş : 0
//     // Kağıt : 1
//     // Makas : 2

//     if (randomNumber == number) {
//         document.getElementById('display').innerHTML = 'Berabere';
//     }
//     if (number == 0 && randomNumber == 2) {
//         document.getElementById('display').innerHTML = 'Kazandın';
//     } else if (number == 1 && randomNumber == 0) {
//         document.getElementById('display').innerHTML = 'Kazandın';
//     } else if (number == 2 && randomNumber == 1) {
//         document.getElementById('display').innerHTML = 'Kazandın';
//     } else {
//         document.getElementById('display').innerHTML = 'Kaybettin';
//     }

// }
// function clearDisplay() {
//     document.getElementById('display').innerHTML = ' ';
//     console.log('Ekran Temizlendi.');
// }


function funcOne(number){

    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ["Taş", "Kağıt", "Makas"];
    const display = document.getElementById("display");

    console.log("Sen : " + choices[number]);
    console.log("Bilgisayar : " + choices[randomNumber]);

    if(number === randomNumber){
        display.textContent = "Berabere";
    }else if(
        number === 0 && randomNumber === 2 ||
        number === 1 && randomNumber === 0 ||
        number === 2 && randomNumber === 1){
        display.textContent = "Kazandın";
    }else{
        display.textContent = "Kaybettin";
    }
}
function clearDisplay(){
    document.getElementById('display').innerHTML = ' ';
    console.log("Ekran Temizlendi");
}