'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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
    { amount: 450, ta: '' },
    { amount: -400, ta: '' },
    { amount: 3000, ta: '' },
    { amount: -650, ta: '' },
    { amount: -130, ta: '' },
    { amount: 70, ta: '' },
    { amount: 1300, ta: '' },
  ],
  interestRate: 1.2, // %
  pin: 1111,
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
      <div class="movements__value">${mov.amount}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = movements => {
  currentAccount.balance = movements.reduce((acc, cur) => acc + cur.amount, 0);
  labelBalance.textContent = `${currentAccount.balance}€`;
};

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov.amount < 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(mov => mov.amount > 0)
    .map(deposit => (deposit.amount * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;

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

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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

  const loanAmount = Number(inputLoanAmount.value);

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
    currentAccount.pin === Number(inputClosePin.value)
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
// const calcPrintBalance = accs => {
//   labelBalance.innerHTML = '';
//   accs.forEach(acc => {
//     const balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
//     console.log(balance);
//     containerMovements.insertAdjacentHTML('afterbegin', balance);
//   });
// };

// calcPrintBalance(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

console.log('Dmitry'.at(0));
console.log('Dmitry'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const convert = movements.map(mov => Math.trunc(mov * eurToUsd));

console.log(movements);
console.log(convert);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


console.log(movements);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);


// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

const eurToUsd = 1.1;

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


const firtsWithrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firtsWithrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let owner;
for (const acc of accounts) if (acc.owner === 'Jessica Davis') owner = acc;
console.log(owner);


console.log(movements);

// Equality
console.log(movements.includes(-130));

// Condition: Some
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Condition: Every
console.log(movements.every(mov => mov > 0));
console.log(account4ex.movements.every(mov => mov.amount > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accountsEx.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat().map(acc => acc.amount);
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flat
const overalBalanceChain = accountsEx
  .map(acc => acc.movements)
  .flat()
  .map(acc => acc.amount)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceChain);

//flatMap
const overalBalanceChain2 = accountsEx
  .flatMap(acc => acc.movements)
  .map(acc => acc.amount)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceChain2);
*/

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
console.log(
  movements.sort((a, b) => {
    console.log('Check');
    if (a > b) return 1;
    if (b > a) return -1;
  })
);

console.log(movements.sort((a, b) => a - b));

// Descending
console.log(
  movements.sort((a, b) => {
    console.log('Check');
    if (a > b) return -1;
    if (b > a) return 1;
  })
);

console.log(movements.sort((a, b) => b - a));
