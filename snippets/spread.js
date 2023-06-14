// Spread operator allows an iterable to spread/expand individually inside the receiver
// Split into a single item and copy them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // Would create an array containing ['u','d','e','m','y']

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [boys, girls, bestFriend];
console.log(friends); // Would show a nested array [[boys],[girls],[bestFriend]]

console.log(...boys, ...girls, ...bestFriend); // Creates a single array, no more nested structure [boys,girls,bestFriend]

// Warning, all arrays will be altered if changing reference variable
const newFriends = friends;
newFriends[0] = "nancy";
console.log(friends); // Both will show [0] - Nancy ["nancy","peter",...]
console.log(newFriends); // ["nancy","peter",...]

// Instead instantiate with spread operator
const newerFriends = [...friends];
newerFriends[0] = "nancy"; //This is the only way to prevent that

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(person); // { name: 'john', job: 'developer' }
console.log(newPerson); // {name: "peter", job: 'developer', city:'chicago'}
