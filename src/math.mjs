import R from 'ramda';

// Сложение
const add5 = R.add(5);
console.log(add5(3));

// Вычитание
const sub3 = R.subtract(R.__, 3);;
console.log(sub3(10));

// Умножение и деление
const double = R.multiply(2);
console.log(double(8))

const half = R.divide(R.__, 2);
console.log(half(22))

// Инкремент/декремент
const x = 1;
console.log(R.inc(x))
console.log(R.dec(x))

// Деление по модулю
console.log(R.mathMod(10, 6));
console.log(R.modulo(10, 6));

// Среднее и медиана

// Отрицание
R.negate(-42); //=> -42

// Суммирование и перемножение списков
R.sum([2,4,6,8,100,1]);
R.product([2,4,6,8,100,1]);