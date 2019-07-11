console.log("Challenge #1:");

let roster = ["Pikachu", "MewTwo", "Onix", "Eevee"];
console.log(roster.length);
// Create an array called "roster" with the following names as 
// strings: Pikachu, MewTwo, Onix, Eevee
// Console.log the length of the "roster" array

// ==================================================================
console.log("Challenge #2:");

roster.push(process.argv[2]);
console.log(roster);
// push the user's first command line argument to the end of the 
// "roster" array (ideally, it's a pokemon's name!)
// console.log the "roster" array

// // ==================================================================
// console.log("Challenge #3:");

// roster.pop(process.arv[1]);
// console.log(roster);