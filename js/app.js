// ZADANIE 1
let getSqrt = (n) => {return Math.sqrt(n)}

console.log(getSqrt(4));

// ZADANIE 2
let concatArray = (array1, array2) => {
	let array3 = array1;
	for(let i = 0; i < array2.length; i++){
		array3.push(array2[i]);
	}
	return array3;
}

console.log(concatArray( [1,3],[3,5]))

// ZADANIE 3
let bigestSumOfTwoElements = (array) => {
	switch(array.length){
		case 0:
			return false;
		case 1:
			return array[0];
		default:
			let biggest;
			let secondBiggest;

			if(array[0]>array[1]){
				biggest = array[0];
				secondBiggest= array[1];
			}else{
				biggest = array[1];
				secondBiggest = array[0];
			}

			for(let i = 2; i < array.length; i++){
				if(array[i] > secondBiggest){
					if(array[i] > biggest){
						secondBiggest = biggest;
						biggest = array[i];
					}else{
						secondBiggest = array[i];
					}
					
				}
			}
			return biggest + secondBiggest;

	}
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7 (3 + 4)
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68 (45 + 23)

// ZADANIE 4
let addPy = (string) => {
	if(string.slice(0,2) !== "Py"){
		return "Py" + string;
	}
	return string;
}

console.log(addPy("thon")); //zwróci "Python"
console.log(addPy("Python")); //zwróci "Python"

// ZADANIE 5
let removeChar = (string, pos) => {

//	let newString = "";
//	for(let i = 0; i<string.length; i++){
//		if(i !== pos){
//			newString = newString + string[i];
//		}
//	}
//
//	return newString;
//
//	OR:

	return string.substr(0,pos) + string.substr(pos+1,);
}

console.log(removeChar("Koteczek", 0)); // zwróci "oteczek"
console.log(removeChar("Koteczek", 3)); // zwróci "Kotczek"

// ZADANIE 6
let removeDuplicates = (string) => {
	let newString = "";
	for(let i=0; i<string.length; i++){
		if(string[i] !== string[i+1]){
			newString = newString + string[i];
		}
	}
	return newString;
}
console.log(removeDuplicates("Kotttteczek")) // zwróci "Koteczek"
console.log(removeDuplicates("Kotttteczczczczek")) // zwróci "Koteczczczek"
console.log(removeDuplicates("Koteczek")) // zwróci "Koteczek"

// ZADANIE 7
let getNegativeNumbers = (array) => {
	let newArray = [];
	for(let i=0; i<array.length; i++){
		if(array[i]<0){
			newArray.push(array[i]);
		}
	}
	if(newArray.lenght = 0){
		return newArray;
	}else{
		console.log("array has no negative numbers");
	}
}

var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));

// ZADANIE 8
let forEach = (array, func) => {
	for(let i=0; i<array.length; i++){ 
		func(array[i]);
	}
}

forEach([2,4,5,6], function(element) {
	console.log("Element tablicy " + element);
});

// ZADANIE 9
let map = (array, func) => {
	let newArray = [];

	for(let i=0; i<array.length; i++){ 
		newArray.push(func(array[i]));
	}

	return newArray;
}

console.log(map([1,3,5,7], function(element) {
	return element - 1;
}));

// ZADANIE 10
let filter = (array, func) => {
	let newArray = [];

	for(let i=0; i<array.length; i++){ 
		if(func(array[i])){
			newArray.push(array[i]);
		}
	}
	
	return newArray;
}

console.log(filter([1, 2, "trzy", 4, "😏"], function(e) { 
    return (e % 2) == 0; 
})); 
// zwroci [2, 4]

// ZADANIE 11
let oddStrings = (array) => {
	let numbersArray = filter(array, function tru(element) {
		return parseInt(element) % 2 !== 0 && !isNaN(parseInt(element));
		//checks if:
		//1. parseint of the element is odd
		//2. the parsed element is a number
	});

	return map(numbersArray, (element) => parseInt(element));
}
console.log(oddStrings([7, 4, "3", 6, 3, "trzy", 2]));
