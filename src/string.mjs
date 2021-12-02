import R from 'ramda';

const str = 'I like RamdaJS';

// Форматирование
R.toUpper(str)
R.toLower(str)
R.trim(str)

// Преобразование
console.log(R.replace(/RamdaJS/, 'React', str))
console.log(R.split(' ', str))
console.log(R.toString(str))
console.log(R.toString([1, 2, 3]))
console.log(R.toString({a: 1, b() {this.a++}}))

// Тесты регуляркой
console.log(R.match(/([a-z]a)/g, str)); 
console.log(R.test(/([a-z]a)/, str)); 

// Общего назначения
// console.log(R.concat(str, '!'));
// console.log(R.head(str));
// console.log(R.last(str));
// console.log(R.tail(str));
// console.log(R.length(str));
