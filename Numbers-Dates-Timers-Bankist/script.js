'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

const account1ex = {
  owner: 'Jonas Schmedtmann',
  movements: [
    { amount: 200, ta: '' },
    { amount: 455.23, ta: '' },
    { amount: -306.5, ta: '' },
    { amount: 25000, ta: '' },
    { amount: -642.21, ta: '' },
    { amount: -133.9, ta: '' },
    { amount: 79.97, ta: '' },
    { amount: 1300, ta: '' },
  ],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

const account2ex = {
  owner: 'Jessica Davis',
  movements: [
    { amount: 5000, ta: '' },
    { amount: 3400, ta: '' },
    { amount: -150, ta: '' },
    { amount: -790, ta: '' },
    { amount: -3210, ta: '' },
    { amount: -1000, ta: '' },
    { amount: 8500, ta: '' },
    { amount: -30, ta: '' },
  ],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

const account3ex = {
  owner: 'Steven Thomas Williams',
  movements: [
    { amount: 200, ta: '' },
    { amount: -200, ta: '' },
    { amount: 340, ta: '' },
    { amount: -300, ta: '' },
    { amount: -20, ta: '' },
    { amount: 50, ta: '' },
    { amount: 400, ta: '' },
    { amount: -460, ta: '' },
  ],
  interestRate: 0.7,
  pin: 3333,
};

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const account4ex = {
  owner: 'Sarah Smith',
  movements: [
    { amount: 430, ta: '' },
    { amount: 1000, ta: '' },
    { amount: 700, ta: '' },
    { amount: 50, ta: '' },
    { amount: 90, ta: '' },
  ],
  interestRate: 1,
  pin: 4444,
};

// const accounts = [account1, account2, account3, account4];
const accountsEx = [account1ex, account2ex, account3ex, account4ex];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelTransfer = document.querySelector('.label--transfer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? movements.slice().sort((a, b) => a.amount - b.amount)
    : movements;

  movs.forEach(function (mov, i) {
    const type = mov.amount > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <p>${mov.ta ? mov.ta : 'No data'}</p>
      <div class="movements__value">${mov.amount.toFixed(2)}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = movements => {
  currentAccount.balance = movements.reduce((acc, cur) => acc + cur.amount, 0);
  labelBalance.textContent = `${currentAccount.balance.toFixed(2)}€`;
};

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outcomes = account.movements
    .filter(mov => mov.amount < 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)}€`;

  const interest = account.movements
    .filter(mov => mov.amount > 0)
    .map(deposit => (deposit.amount * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;

  // movements.forEach(mov => {
  //   if (mov > 0) {
  //     const valueIn = movements
  //       .filter(mov => mov > 0)
  //       .reduce((acc, cur) => acc + cur, 0);
  //     labelSumIn.textContent = `${valueIn}€`;
  //   } else {
  //     const valueOut = movements
  //       .filter(mov => mov < 0)
  //       .reduce((acc, cur) => acc + cur, 0);
  //     labelSumOut.textContent = `${Math.abs(valueOut)}€`;
  //   }
  // });
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(n => n[0])
      .join('');
  });
};
createUsernames(accountsEx);

// Event Handlers

const updateUI = acc => {
  displayMovements(acc.movements);
  calcDisplayBalance(acc.movements);
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accountsEx.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (!currentAccount) {
    labelWelcome.textContent = `Account doesn't exist!`;
    labelWelcome.style.color = 'red';
    containerApp.style.opacity = 0;
  } else if (currentAccount?.pin) {
    labelWelcome.textContent = `Wrong PIN!`;
    labelWelcome.style.color = 'red';
    containerApp.style.opacity = 0;
  }

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.style.color = '';
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display movements, balance and summary
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accountsEx.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push({
      amount: -amount,
      ta: `to ${receiverAcc.owner}`,
    });
    receiverAcc.movements.push({
      amount: amount,
      ta: `from ${currentAccount.owner}`,
    });
    updateUI(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    inputTransferTo.blur();
    labelTransfer.style.opacity = '1';
    labelTransfer.style.color = 'green';
    labelTransfer.textContent = 'Completed!';

    setTimeout(function () {
      labelTransfer.style.opacity = '0';
      setTimeout(function () {
        labelTransfer.textContent = '';
      }, 1000);
    }, 2000);
  } else {
    labelTransfer.style.color = 'red';
    labelTransfer.style.opacity = '1';
    labelTransfer.textContent = 'Error!';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov.amount >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push({
      amount: loanAmount,
      ta: `Loan from BANK`,
    });
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accountsEx.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    // Delete account
    accountsEx.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);

// Base 10 0 to 9. 1/10 = 0.1 3/10 = 0.33333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e30px', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(3, 10));

// Rounding integers

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Roundings decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
