const input = document.getElementById("input")
const result = document.getElementById("resultText")
const nameOfResult = document.getElementById("nameOfResult")

function checkTheSentence (input) {
    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            let sentence = input.value;
            const classicText = sentence.split(" ").map(checkTheLetterForSentence).join(" ")
            console.log(classicText);
        }

    })
}
function checkTheLetterForSentence (word) {
    const letter = word.charAt(word.length-1);
    const needToChange = ["ա", "ո"].includes(letter);
    return needToChange ? word + "յ" : word;
    
}

checkTheSentence(input)