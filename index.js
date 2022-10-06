let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let codeOne = document.getElementById("codeOne-el")
let codeTwo = document.getElementById("codeTwo-el")

 
function randomCode() {
       let randomPassword = characters[Math.floor( Math.random() * characters.length )] 
      for( let i = 0; i < 15; i++){
    return randomPassword
     }
      }


function generatePassword() { 
            let firstPassword = randomCode()
            let secondPassword = randomCode()
            codeOne.textContent += firstPassword
            codeTwo.textContent += secondPassword
    }
