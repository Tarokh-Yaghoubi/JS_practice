
// Conditionals: Ternary Operator

// syntax
// condition ? if true : if false;

let soup = "Chicken Noodle Soup"

let response = soup ? "Yes, we have soup" : "Sorry, soup is over"

console.log(response)

let playerOne = "rock"
let computer = "scissors"

let result = playerOne === computer ? "Tie Game!"
: playerOne === "rock" && computer === "paper" ? "Computer Wins!"
: playerOne === "paper" && computer === "scissors" ? "Computer Wins!"
: playerOne === "scissors" && computer === "rock" ? "Computer Wins!"
: "PlayerOne Wins!"

console.log(result)
