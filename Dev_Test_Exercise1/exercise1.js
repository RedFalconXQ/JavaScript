const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var firstNumber;

function submitNumber(){
    let number = +document.getElementById("number").value;
    console.log("The position " + number + " in the array is the number: " + arrayNumbers[number]);
    console.log("Number: ", arrayNumbers[number]);

    sum = number + 2;
    firstNumber = arrayNumbers[sum];
    console.log("Sum of positions = ", sum);
    console.log("First number: ", firstNumber);
}