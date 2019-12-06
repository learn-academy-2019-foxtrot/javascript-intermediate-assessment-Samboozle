// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases


// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

console.log("Question 1:\n");

const makeFib = (number) => {
	if (number === 0) {
		return 0
	} else if (number === 1) {
	 return 1
 } else {
	 return makeFib(number - 1) + makeFib(number - 2)
 }
}

const getFib = (length) => {
	let array = []
	for (let i = 1; i <= length; i++) {
		array.push(makeFib(i))
	}
	return array
}

const getFib2 = (length) => {
	let trueLength = length + 1
	let array = new Array(trueLength).fill(null)
	return array.map((value, index) => makeFib(index)).slice(1)
}

console.log(getFib(10));
console.log(getFib2(10));

console.log("thanks for the opportunity to revisit recursion! I've been meaning to address this sort of problem. :D");

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

console.log("\nQuestion 2:\n");

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const addChecker = (array) => {
	return array.filter(value => typeof value === "number" && Math.abs(value % 2) === 1)
}

console.log(addChecker(fullArr1));
console.log(addChecker(fullArr2));

// 3. Given the object below, complete the console.log to find specific information:

console.log("\nQuestion 3:\n");

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

console.log("\nQuestion 4:\n");

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]
var correctedArray = ["9", "1", "t", "o", "r", "t", "x", "o", "F"]

const reverser = (array) => {
	return array.reverse()
}

console.log(reverser(originalArray1));
console.log(reverser(originalArray2));
console.log(reverser(correctedArray));

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

console.log("\nQuestion 5:\n");

var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (string, letter) => {
	let count = 0
	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() === letter.toLowerCase()) {
			count += 1
		}
	}
	return count
}

console.log(letterCounter(ourString, "L"));

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

console.log("\nQuestion 6:\n");

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleDealio = (string) => {
	if (string.length % 2 === 0) {
		return string.slice((string.length / 2 - 1), (string.length / 2 + 1))
	} else {
		return string.charAt(Math.floor(string.length / 2))
	}
}

console.log(middleLetters1, "->", middleDealio(middleLetters1));
console.log(middleLetters2, "->", middleDealio(middleLetters2));

// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

console.log("\nQuestion 7:\n");

class Sphere {
	constructor(name, number){
		this.name = name
		this.radiusInches = number
	}
	surfaceArea = () => {
		let { radiusInches } = this
		return `${this.name} has a surface area of ${(4*Math.PI*(radiusInches**2)).toFixed(4)} inches squared`
	}
}

const basketBall = new Sphere("basketball", 4.5)
const myBrain = new Sphere("my brain", 999999999999)
const theEarth = new Sphere("the Earth", 250826270)


console.log(basketBall.surfaceArea());
console.log(theEarth.surfaceArea());
console.log(myBrain.surfaceArea());



// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

console.log("\nQuestion 8:\n");

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

let { specs } = myCar

console.log(Object.values(specs).join(", "));

// OR //

let { doors, transmission } = myCar.specs

console.log(`${doors}, ${transmission}`);

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

console.log("\nQuestion STRETCH:\n");

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const additionMission = (array) => {
	let sum = 0
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
		newArray.push(sum)
	}
	return newArray
}

// return array.map((value, index) => value + (index === 0 ? 0 : array[index - 1])) -> almost there, but not quite!


console.log(additionMission(numbersToAdd1));
console.log(additionMission(numbersToAdd2));
console.log(additionMission(numbersToAdd3));
