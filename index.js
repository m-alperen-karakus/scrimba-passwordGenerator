const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const charactersWithoutSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let generatedPassword = []
let length = document.getElementById('passwordLength').value
function generatePassword(passwordLength) {
    generatedPassword = []
    
    try {
        if (document.querySelector('.symbols input:checked').checked == true) {
            for (let i = 0; i < passwordLength; i++) {
                let password = Math.floor(Math.random() * 91)
                generatedPassword.push(characters[password])
            }
        }
    }

    catch ( err ) {
        for (let i = 0; i < passwordLength; i++) {
            let password = Math.floor(Math.random() * 62)
            generatedPassword.push(charactersWithoutSymbols[password])
        }
    }

    let passwordString = generatedPassword.join('')
    return passwordString
}
document.getElementById("password1").innerText = generatePassword(length)
document.getElementById("password2").innerText = generatePassword(length)

document.getElementById("generate").addEventListener("click", function () {
    length = document.getElementById('passwordLength').value
    document.getElementById("password1").innerText = generatePassword(length)
    document.getElementById("password2").innerText = generatePassword(length)
})

document.getElementById("password1").addEventListener("click", function () {
    let copyText = document.getElementById("password1").textContent
    navigator.clipboard.writeText(copyText).then(function (x) {
        alert("Password copied to clipboard: " + copyText);
    });
})

document.getElementById("password2").addEventListener("click", function () {
    let copyText = document.getElementById("password2").textContent
    navigator.clipboard.writeText(copyText).then(function (x) {
        alert("Password copied to clipboard: " + copyText);
    });
})
