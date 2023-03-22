function calculator(string) {
  const array = string.split(' ');
  console.log(array.length);
  const numbers = [array[0], array[2]];
  const operator = array[1];

  if (!+array[0] && !+array[2]) {
    const trNum = toAN();
    if (!trNum) return;
    const result = calc(...trNum);
    return toRN(result);
  } else if (+array[0] && +array[2]) {
    const result = calc(...[+array[0], +array[2]]);
    return result;
  } else {
    return;
  }

  function calc(a, b) {
    if (a > 0 && a <= 10 && b > 0 && b <= 10) {
      switch (operator) {
        case '+':
          return Math.trunc(a + b);
        case '-':
          return Math.trunc(a - b);
        case '*':
          return Math.trunc(a * b);
        case '/':
          return Math.trunc(a / b);
        default:
          return;
      }
    }
  }

  function toAN() {
    let arr = [];
    for (let rn of numbers) {
      switch (rn) {
        case 'I':
          arr.push(1);
          break;
        case 'II':
          arr.push(2);
          break;
        case 'III':
          arr.push(3);
          break;
        case 'IV':
          arr.push(4);
          break;
        case 'V':
          arr.push(5);
          break;
        case 'VI':
          arr.push(6);
          break;
        case 'VII':
          arr.push(7);
          break;
        case 'VIII':
          arr.push(8);
          break;
        case 'IX':
          arr.push(9);
          break;
        case 'X':
          arr.push(10);
          break;
        default:
          return;
      }
    }
    return arr;
  }
}

function toRN(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';

  for (key in map) {
    const repeatCounter = Math.floor(num / map[key]);

    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }

    num %= map[key];

    if (num === 0) return result;
  }

  return result;
}

console.log(calculator('1 + 1'));
console.log(calculator('1 + 2'));
console.log(calculator('4 + 3'));
console.log(calculator('10 + 10'));
console.log(calculator('  - I'));
console.log(calculator('IV + III'));
console.log(calculator('10 - I'));
console.log(calculator(' - '));
