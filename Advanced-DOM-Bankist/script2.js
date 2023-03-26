const input = document.querySelector('.input');
const button = document.querySelector('.button');

// I + IV

function calculator(string) {
  const array = string.split(' ');
  if (array.length > 3) throw error; // Первая ошибка, неправильно слово lenght, должно быть length
  const numbers = [array[0], array[2]]; // I и IV
  const operator = array[1]; // +

  if (!+array[0] && !+array[2]) {
    const trNum = toAN(); // [1, 3, 5, 4] > 1, 3, 5, 4
    if (!trNum) return;
    const result = calc(...trNum); // calc(1, 4)
    const rNresult = toRN(result);
    return rNresult;
  } else if (+array[0] && +array[2]) {
    const result = calc(...[+array[0], +array[2]]);
    return console.log(result);
  } else {
    throw error;
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
    let arr = [1, 4];
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
        case 'IV': // Ошибка 2: Цифра 4 по арабски IV
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
          throw error;
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
  if (num <= 0) return result;

  for (key in map) {
    for (key in map) {
      result += key.repeat(Math.floor(num / map[key]));
      num %= map[key];
    }
  }
  return result;
}

button.addEventListener('click', () => calculator(input.textContent));
