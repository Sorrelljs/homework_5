

// {
    //   apple: 5,
    //   pear: 4,
    //   bananas: 7,
    //   ...
    // }
    const array = ['apple', 'pear', 'bananas', 'watermelon',
     'mango', 'pear', 'apple', 'bananas', 'pear', 
     'strawberry', 'pineapple'];

function myFunction(arr){

    let result = {}

    for(let i =0; i < arr.length; i++){
        console.log(arr[i])

       var arrayWords = arr[i]
    // put array words in an object and display arraywords length in a number
       result[arrayWords] = arrayWords.length
    
    }
    return result
}

console.log(myFunction(array))
