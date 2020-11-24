// // Run-length encoding (RLE) is a simple data compression algorithm.
//  It works by turning consecutive counts of characters into a number and a single character. 
//  For example, the string of "QQQQQ" turns into "5Q"
//   because there are 5 consecutive characters of the letter Q. Given the string of:

const uncompressedString = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA"
// // Write a function that implements RLE on any string input. The above input should return:

// // "3Q7U7l2q9Q2T1A"

function myFunction(str){ // parameters : taking the ingredients

    let result = ''
    let letter = ''
  //make sandwich
  for(let i = 0; i < str.length; i++){
    console.log(str[i])
    const newLetter = str[i]
    if (previousLetter !== newLetter){
    }
    }

    return result 
}

//output: return the sandwich 
myFunction(uncompressedString)

//output = #num
//1 loop through left to right
//compare letter to the last letter we looked at
//same, keep counting
// not same write down #number + #letter