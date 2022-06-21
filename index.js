// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(37));
// ==============================================================
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword('jqueryismyjam'));
// ==============================================================
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(12));
// ===========================================
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered < available) {
//     message = 'Order is processed, our manager will contact you.';
//   } else {
//     message = 'Not enough goods in stock!';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 130));
// ===============================================
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a, b, c, d);
// =======================================
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   } else {
//     message = 'Insufficient funds!';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(1000, 3, 15000));
// ===============================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword(null));

// ===============================

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));
// ===============================
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('free'));
// ==============================================
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(20, 50, 76));
// ===============================================
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(50000));
// ============================================
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// ===============================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// ==========================================
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('starter'));
// =====================================================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));
// =====================================================================
// function getShippingCost(country) {
//   let message;

//   // Change code below this line
//   let price;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   switch (country) {
//     case 'Chinaґ':
//       price = 100;
//       break;
//     case 'Chile':
//       price = 250;
//       break;
//     case 'Australia':
//       price = 170;
//       break;
//     case 'Jamaica':
//       price = 120;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// =====================================================================
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength('Joe'));
// =====================================================================
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 0));
// =====================================================================
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
// =====================================================================
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));
// console.log(checkForName('Egor Kolbasov', 'Zhenya'));
// console.log(checkForName('Egor Kolbasov', 'Vadim'));
// =====================================================================
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizedToLowerCaseMessage = message.toLowerCase();
//   if (
//     normalizedToLowerCaseMessage.includes('spam') ||
//     normalizedToLowerCaseMessage.includes('sale')
//   ) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));
// =====================================================================
// const add = function (...args, a) {
//     console.log(args, a);

// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 'hello'));
// =====================================================================
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log(checkAge(38));
// =======================================================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     return (message = 'Welcome!');
//   }

//   return 'Access denied, wrong password!';
//   // Change code above this line
// }
// console.log(checkPassword('jqueryismyjam'));
// ========================================================================
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }
// console.log(checkStorage(150, 0));
// ========================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);
// ========================================================================
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);
// =======================================================================
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// =======================================================================
// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript essentials';
// console.log(message.split(' ')); // ["JavaScript", "essentials"]
// =======================================================================
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// =======================================================================
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const words = message.split(' ').length;
//   return words * pricePerWord;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice('Web-development is creative work', 20));
// =======================================================================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// =======================================================================
// function slugify(title) {
//   // Change code below this line

//   return title.toLowerCase().split(' ').join('-');
//   // Change code above this line
// }
// console.log(slugify('English for developer'));
// =======================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const nonExtremeEls = fruits.slice(1, -1);

// console.log(nonExtremeEls);
// =======================================================================
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const array = firstArray.concat(secondArray);
//   if (array.length > maxLength) {
//     return array.slice(0, maxLength);
//   }
//   return array;
//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// =======================================================================
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total = total + i;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(3));
// =======================================================================
// const calculateTotalPrice = [12, 85, 37, 4];
// let total = 0;
// // Change code below this line
// for (let i = 0; i < calculateTotalPrice.length; i += 1) {
//   total += calculateTotalPrice[i];
// }
// // Change code above this line

// console.log(total);
// =======================================================================
// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;

//   // Change code above this line
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// =======================================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// =======================================================================
// function filterArray(numbers, value) {
//   // Change code below this line

//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// ========================================================================
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum'));
// ========================================================================
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   // 1. перебрати один масив
//   for (const arr of array1) {
//     // 2. визначити, чи елементи першого масива входять в другий,
//     // якщо так, то вивести в новий масив.
//     if (array2.includes(arr)) {
//       newArray.push(arr);
//     }
//   }
//   return newArray;

//   // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// ========================================================================
// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }
// ========================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const variable of order) {
//     total += variable;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ========================================================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const variable of numbers) {
//     const number = variable;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// ========================================================================
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;

//   // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// ========================================================================
// function includes(array, value) {
//   // Change code below this line
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// =========================== OBJECTS======================================
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   book.pageCount = 836,
// originalLanguage = 'en',
// translations = ['ua', 'ru'],
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book);
// ==========================================================================
// const propName = 'name';
// const user = {
//   age: 25,
// };

// user[propName] = 'Генрі Сибола';
// console.log(user);
// ==========================================================================
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
// ==========================================================================
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// ========================================================================
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }
// =======================================================================
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// =======================================================================
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
  {
    title: 'Сон смішної людини',
    author: 'Федір Достоєвський',
    rating: 7.75,
  },
];
for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  // console.log(book.title);
  // // Автор
  // console.log(book.author);
  // // Рейтинг
  // console.log(book.rating);
}
