const prompt = require("prompt-sync")();
let string = prompt("Enter string ");
while (true) {
  console.log(`
    Choose an option:
    1. Convert to Uppercase
    2. Convert to Lowercase
    3. Count Characters and Words
    4. Reverse String
    5. Check Palindrome
    6. Replace a word
    7. Exit
    `);

  let choice = parseInt(prompt("Enter your choice (1-7):"));

  switch (choice) {
    case 1:
      console.log(string.toUpperCase());
      break;
    case 2:
      console.log(string.toLowerCase());
      break;
    case 3:
      function wordCount(s) {
        return s.split(" ").filter(function (s) {
          return s != " ";
        }).length;
      }
      let WordLength = wordCount(string); // returns word length
      console.log(`Characters: ${string.length} 
  Words: ${WordLength}
      `);
      break;

    case 4:
      function reverseString(str) {
        return str.split(" ").reverse().join(" ");
      }
      console.log(reverseString(string));
      break;

    case 5:
      let newString = prompt("Enter word to check palindrome ");
      function reverseSingle(str) {
        return str.split("").reverse().join("");
      }
      let newString2 = reverseSingle(newString);
      if (newString == newString2) {
        console.log("congrates!! Your word is palindrome");
      } else {
        console.log("Not a palindrome");
      }
      break;

    case 6:
      let original = prompt("Enter which word you want to replace with ");
      let Rep = prompt("Enter new word ");
      function REPLACEWORD(str, original, rep) {
        return str.replace(original, rep);
      }
      let newReplace = REPLACEWORD(string, original, Rep);
      console.log(newReplace);
      break;

    case 7:
      console.log("Exiting program......");
      process.exit();

    default:
      console.log("Invalid choice, please try again.");
      break;
  }
}
