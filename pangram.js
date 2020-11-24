// A Pangram is a sentence that contains every character of the english language. 
// This sentence "The quick brown fox jumps over the lazy dog." is a panagram. 
// Create a function that will return true if a given input is a panagram or false if the input is not.

// The input can have both uppercase and lowercase letters

const panagram = 'abcdefghijklmnopqrstuvwxyz'
const notAPanagram = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

// Given the input panagram the function should return true given

//  the input notAPanagram the function should return false

function isPanagram(string){

    const letters = []

    for(let i = 0; i <string.length; i++){

        if(letters.includes(string[i])){

            return false
        } 

        letters.push(string[i])
        // console.log(letters)
        if(letters.length >= 26){
            return true
        }   
                        
    }
    
} 
console.log(isPanagram(notAPanagram))

    
    // create a boolean output that displays whether the param is true or false
// for(let i = 0; i < string.length; i++){
//     console.log(string[i])
    //figure out if there is every letter of the alphabet in the param