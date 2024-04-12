// 1) Створіть змінні для кількості книг у вашій бібліотеці та кількості прочитаних книг. Потім обчисліть відсоток прочитаних книг від загальної кількості книг.

console.log('\n Task №1 - Bookkeeping \n');

const booksTotalAmount = 200;
const booksReadedAmount = 20;
const booksReadedAmountInPercentage = (booksReadedAmount / booksTotalAmount) * 100;

console.log('booksTotalAmount =', booksTotalAmount, 'pieces');
console.log('booksReadedAmount =', booksReadedAmount, 'pieces');
console.log('booksReadedAmountInPercentage =', booksReadedAmountInPercentage, "% \n");

// 2) Створіть змінну для суми грошей у вашому кошельку в гривнях. Потім обчисліть, скільки це буде в євро, якщо курс обміну 1 євро = 42,09 гривень.
// Оскільки це абстрактна "моя кишенька" і більше інформації немає, то не будемо нічого вигадувати і ускладнювати - myWallet:

console.log('Task №2 - My Wallet \n');

const currentExchangeRateOneEURToUAH = 42.09;
const myWalletMoneyAmountUAH = 1000;
const myWalletMoneyAmountEUR = myWalletMoneyAmountUAH / currentExchangeRateOneEURToUAH;

console.log('myWalletMoneyAmountUAH =', myWalletMoneyAmountUAH, 'UAH');
console.log('currentExchangeRateOneEURToUAH =', currentExchangeRateOneEURToUAH, 'UAH');
console.log('myWalletMoneyAmountEUR =', myWalletMoneyAmountEUR, "EUR \n");

// 3) Створіть змінні для цін на страви та напої у ресторані (м'ясо, салат, напій). Обчисліть загальну суму замовлення з урахуванням чайових (15% від суми). 

console.log('Task №3 - Restaurant Order \n');

const meatPrice = 300;
const saladPrice = 200;
const beveragePrice = 100;

const orderTipAmountPercentage = 15;

const orderPrice= meatPrice + saladPrice + beveragePrice;
const orderTipAmount = orderPrice * (orderTipAmountPercentage/100);
const orderPriceWithTip = orderPrice + orderTipAmount;

console.log('meatPrice =', meatPrice, 'UAH');
console.log('saladPrice =', saladPrice, 'UAH');
console.log('beveragePrice =', beveragePrice, "UAH \n");

console.log('orderTipAmountPercentage =', orderTipAmountPercentage, '%  \n');

console.log('orderPrice =', orderPrice, 'UAH');
console.log('orderTipAmount =', orderTipAmount, 'UAH');
console.log('orderPriceWithTip =', orderPriceWithTip, "UAH");