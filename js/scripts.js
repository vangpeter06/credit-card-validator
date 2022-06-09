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

function CompanyValidator(number) {
  let numberArray = stringToArray(number);
  if (numberArray[0] === 3 && (numberArray[1] === 4 || numberArray[1] ===7)) {
    return "American Express";
  } else if (numberArray[0] === 4) {
    return "Visa";
  } else if (numberArray[0] === 5) {
    return "Mastercard";
  } else if (numberArray[0] === 6) {
    return "Discover Card";
  } else {
    // not a valid card
  }
}

const cardNumber = "4102080880435620";

CardValidator(cardNumber);

