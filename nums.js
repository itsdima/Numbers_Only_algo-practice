// This function makes a new array with numbers only
function numbersOnly(arr) {
	var arrNew = []; 
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == "number"){
			arrNew.push(arr[i]);
		} 
	}
	return arrNew; 
}
console.log(numbersOnly([3, 6, "hello", 7, "bye", 10, 16, "I", "string"]));

//this function removes all numbers from the original array 
function noNumbers(arr) {

	for(var i = arr.length- 1; i >= 0; i--){
		if(typeof arr[i] == "number"){
			arr.splice(i, 1);
		} 
	}
	return arr; 
}
console.log(noNumbers([3, 6, "hello", 7, "bye", 10, 16, "I", "string"]));