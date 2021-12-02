import R from 'ramda';


// compose vs pipe
// pipe aka chainig arr.map().filter().reduce();
// compose aka calling fn inside other fn -> fn1(fn2(fn3(x)))
const sizes = {
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '1.75rem',
  xl: '2rem',
 };

// const convertRemToPx = R.pipe(
//    parseFloat,
//    R.multiply(10),
//    Math.round,
//    R.toString,
//    R.concat(R.__, 'px')
// );
const convertRemToPx = R.compose(
  R.concat(R.__, 'px'),
  R.toString,
  Math.round,
  R.multiply(10),
  parseFloat,
);

R.map(convertRemToPx)(sizes)

// juxt and converge
// ap(fn1, fn2) - принимаемое значение спускает в обе функции, потом результат вызова второй функции передает в fn1 как второй параметр
// juxt - принимает массив функций, в каждую спускает полученный набор аргументов (их мб сколько угодно), возвращает массив с количеством значений равным, количеству функций - удобно использовать как часть pipe, когда с полученным массивом затем нужно сделать дополнительные операции
// converge (схождение, сведение) - принимает функцию сведения и массив функций. Каждая функция в массиве в качестве параметра получает одинаковые данные, а результат вызова передается параметром в функцию сведения, в соответствии с порядком функций в массиве.

// flip - принимает функцию и возвращает новую, аналогичную, но меняя при этом местами 1-й и 2-й аргументы


// tap - принимает функцию и значение, возвращает всегда то же значение, не меняя его, но при этом вызывает полученную функцию, удобно для логирования