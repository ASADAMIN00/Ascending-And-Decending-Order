// // var desire =  [55, 35, 25, 65, 45, 15, 105];
var numbers = [55, 35, 25, 65, 45, 15, 105]; // 105,65,55,45,35,25,15
document.getElementById('top').innerHTML = numbers;

// console.log(numbers);

// ------- For Ascending Order ------------
function ascending() {

    for (var i = 1; i <= numbers.length; i++ ) { 

        for (var j = 0; j < numbers.length-1; j++) { 
    
            if ( numbers[j] > numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box1').innerHTML = numbers;
}

// console.log(numbers); // no change in array 

// ------- For Descending Order ------------
function descending() {

    for (var i = 1; i <= numbers.length; i++ ) { 

        for (var j = 0; j < numbers.length-1; j++) { 
    
            if ( numbers[j] < numbers[j+1]) { // 9 > 2
    
                         // indexNumber/khnJanaH   deleting            adding
                numbers.splice( j,                    0,         numbers[j+1],numbers[j])
    
                numbers.splice(j+2 , 2);
    
                console.log(numbers);
    
            }
        }
    
    }
    
    document.getElementById('box2').innerHTML = numbers;
}
