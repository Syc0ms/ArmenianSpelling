const input = document.getElementById("input")
const result = document.getElementById("resultText")
const nameOfResult = document.getElementById("nameOfResult")

function checkTheSentence (input) {
    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            let sentence = input.value;
            const arrayOfSentence = sentence.split(' ');
            for(let i = 0; i < arrayOfSentence.length; i++ ){
                checkTheLetterForSentence(arrayOfSentence[i], sentence)
            }

        }

    })
}
function checkTheLetterForSentence (word, sentence) {
//    console.log(sentence)
  //  console.log(word)
    
    const letter = word.charAt(word.length-1);
    addLetter(letter, word, sentence)
}

function replaceTheSentenceWords () {

}


checkTheSentence(input)


// function checkTheLetter(input){
//     input.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             const inputWord = input.value;
//             console.log(inputWord)
//             const letter = inputWord.charAt(inputWord.length-1);
//             addLetter(letter, inputWord);
//         }
//     });
// }

function addLetter (letter, inputWord, sentence) {
    if(letter === "ա" || letter === "ո"){
        const newWord = inputWord + "յ";
        let a = sentence.replace(inputWord, newWord)
        console.log(a)
        result.innerHTML = a;
    } 
}
// checkTheLetter(input)
