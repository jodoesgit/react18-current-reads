// Filter - returns a new array, can manipulate the size of a new array (unlike a map)
// Returns based on condition(s)

// Find - returns a single instance (obj), returns first match - if no match, undefined

const people = [
	{ name: "bob", age: 20, position: "developer" },
	{ name: "peter", age: 25, position: "designer" },
	{ name: "susy", age: 30, position: "the boss" },
	{ name: "anna", age: 35, position: "the intern" },
];

// filter
const youngPeople = people.filter((person) => {
	// if (person.age < 30) {
	// 	return person;
	// }
	return person.age < 30;
});

console.log(youngPeople); //returns [{bob},{peter}]

const developers = people.filter((person) => person.position === "developers");
console.log(developers); // returns {bob}

// no match
const seniorDevs = people.filter((person) => item.position === "senior dev");
console.log(seniorDevs); // returns empty array [] (undefined)

// find
const peter = people.find((person) => person.position === "developer");
console.log(peter); // returns {peter}

const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit); //lemon

// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson); // undefined

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); // returns {bob}

const anna = people.filter((person) => person.name === "anna");
console.log(anna); // Anna is still array
console.log(anna[0].position); // designer
console.log(peter.position); // intern
