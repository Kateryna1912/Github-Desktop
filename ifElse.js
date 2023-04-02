let genre = prompt("What's your favorite books genre?");
if (genre === "favoriteGenre") {
  alert("Thanks for the answer");
} else {
  alert("😀");
}

let book = prompt("What's your favorite book?");
if (book === "book") {
  alert("Great choice! It's a classic.");
} else {
  alert(book + "a very interesting book 🤩");
}

let rate = prompt(" How would you rate" + book + " on a scale of 1 to 5");
if (rate >= 4) {
  alert("That's a great rating. You must have enjoyed the book!");
} else if (rate >= 2) {
  alert("That's an okay rating. Maybe try a different book next time.");
} else {
  alert("Sorry to hear that. Maybe the book wasn't for you.");
}
let future = prompt("What do you want to read next ?");
if (future === "future") {
  alert("great idea 👻");
} else {
  alert("I heard somewhere about" + future + ". I hope you like it! 😉");
}
