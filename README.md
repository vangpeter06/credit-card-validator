Describe: stringToArray()
Test: "Should return a string as an array of integers"
Code:
const cardNumber = "4102080880435620";
stringToArray(cardNumber);
Expected Output: [4, 1, 0, 2, 0, 8, 0, 8, 8, 0, 4, 3, 5, 6, 2, 0]


Describe: CardValidator()

<!-- This test is obsolete -->
Test: "Moving right to left, the function should double every other number"
Code:
const cardNumber = 4102080880435620;
CardValidator(cardNumber);
Expected Output: [4, 2, 0, 4, 0, 16, 0, 16, 8, 0, 4, 6, 5, 12, 2, 0]

Test: "If the doubled number is double digits, add those digits together"
Code:
const cardNumber = 4102080880435620;
CardValidator(cardNumber);
Expected Output: [4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0]
