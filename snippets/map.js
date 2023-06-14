// MAP Method
const people = [
	{
		name: "bob",
		age: 20,
		position: "developer",
	},
	{
		name: "anna",
		age: 25,
		position: "designer",
	},
	{
		name: "susy",
		age: 30,
		position: "the boss",
	},
];

// Quokka.js - Extension
// Returns a new array (even if empty)
// Does not change the size of original array (unlike filter)
// user values from original array when making new one

const ages = people.map((oerson) => {
	// console.log(person); // returns all people in the array
	// return person.age; // returns 20 25 30
	// return person.age * 2; // returns 40 50 60
});

// Alt setup:
const altAges = people.map((person) => person.age * 2);

// w/ Arrow Function
const getAges = (person) => person.age * 2;

// console.log(ages); // returns [] x-items in array 4/4 - etc.

const newPeople = people.map((item) => {
	return {
		firstName: item.name.topUpperCase(),
		oldAge: item.age + 20,
	};
});

console.log(newPeople); // Creates new array with age -> oldAge and +20 on all age values

// In html <div id="result"></div>
const names = people.map((person) => "<h2>${person.name}</h2>");
const result = document.querySelector("#result");

result.innerHTML = names.join("");
