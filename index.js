const greet = "Hello Students, Welcome to the second week!";
console.log(greet);

console.log(greet.replace("second", "2nd"));
console.log(greet);

const students = "Students";
const index = greet.indexOf(students);
console.log("The index of the word studets is " + index);

console.log(greet.toUpperCase());
console.log(`The length of the string is ${greet.length}`);

const viewerCount = 50 * 2;
console.log("The viewer count is " + viewerCount);
console.log(`The viewer count is + ${viewerCount}`);
console.log(`${viewerCount > 1 ? "great" : "not great"}`);

console.log("This story is\n" + "very long");
console.log(`This story is
very long`);

let viewers = 10;
console.log((viewers += 1));
