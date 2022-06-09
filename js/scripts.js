// utility logic

function stringToArray(array) {
  array = array.toString();
  array = array.split("");
  for (i = 0; i <= array.length-1; i++) {
    array[i] = parseInt(array[i]);
  }
  return array;
}

// business logic

function CardValidator(number) {
  let numberArray = stringToArray(number);
  let sum = 0;
  for(let i = 0; i <= numberArray.length-1; i++) {
    if (i%2 === 1) {
      numberArray[i] = numberArray[i] * 2;
      if (numberArray[i] >= 10) {
        let digit = numberArray[i];
        let digitArray = stringToArray(digit);
        numberArray[i] = digitArray[0] + digitArray[1];
      }
    }
    sum += numberArray[i];
  }
  if (sum%10 === 0) {
    return true;
  } else {
    return false;
  }
}

const cardNumber = "4102080880435620";

CardValidator(cardNumber);

