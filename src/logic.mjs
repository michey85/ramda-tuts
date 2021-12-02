import R from 'ramda';

// базовые предикаты
// isNil - проверка на null, undifined
R.isNil(null); //=> true
R.isNil(undefined); //=> true
R.isNil(0); //=> false
R.isNil([]); //=> false
// isEmplty - проверка на пустое значение (строку, массив, объект)
R.isEmpty([1, 2, 3]);   //=> false
R.isEmpty([]);          //=> true
R.isEmpty('');          //=> true
R.isEmpty(null);        //=> false
R.isEmpty({});          //=> true
R.isEmpty({ length: 0 }); //=> false

// defaultTo
const defaultTo42 = R.defaultTo(42);

defaultTo42(null);  //=> 42
defaultTo42(undefined);  //=> 42
defaultTo42(false);  //=> false
defaultTo42('Ramda');  //=> 'Ramda'

// логические выражения OR, EITHER, and, both, not, xor
// or - принимает два значения, действует как логическое ИЛИ
R.or(true, true); //=> true
R.or(true, false); //=> true
R.or(false, true); //=> true
R.or(false, false); //=> false
// and - принимает два значения, действует как логическое И
R.and(true, true); //=> true
R.and(true, false); //=> false
R.and(false, true); //=> false
R.and(false, false); //=> false
// not - принимает одно значение и инвертирует его, как отрицание !
R.not(true); //=> false
R.not(false); //=> true
R.not(0); //=> true
R.not(1); //=> false
// xor - Возвращает истину, если один из аргументов является истинным, а другой - ложным. В противном случае возвращается false.
R.xor(true, true); //=> false
R.xor(true, false); //=> true
R.xor(false, true); //=> true
R.xor(false, false); //=> false

// complement - принимает функцию и возвращает новую функцию с тем же количеством аргументов. Новая функция возвращает true, если оригинальная вернула бы falsy значение, и наоборот
const isNotNil = R.complement(R.isNil);
isNil(null); //=> true
isNotNil(null); //=> false
isNil(7); //=> false
isNotNil(7); //=> true
const isNotEmpty = R.complement(R.isEmpty);

// either - принимает две функции (с логикой), работает как ИЛИ, возвращая значение первой функции, при truth'y значении, в противном случае - результат вызова второй функции (вызывается только если первая функция вернула falsy)
const hasNoValue = R.either(R.isNil, R.isEmpty);
hasNoValue(null);
hasNoValue([]);
hasNoValue('');

// both - то же самое, только как И, результат первой функции при falsy, иначе - резльтат вызова второй функции
// подходят для формирования собственных комбинированных предикатов
const hasValue = R.both(isNotNil, isNotEmpty);
hasValue(null);
hasValue([]);
hasValue('');


// Ветвления и цикл (поток) - cond, ifElse, when, unless, until
// ifElse
R.ifElse(
    R.is(Number),
    R.add(5),
    R.identity,
);
R.when(
    R.is(Number),
    R.add(5),
);
R.unless(
    R.is(Number),
    R.slice(1, Infinity)
);
R.cond([
    [R.isNil, R.always(0)],
    [R.is(Number), R.add(10)],
    [R.T, R.identity]
]); // return undefined если ни один из кейсов не выполнился

// until - принимает предикат, функцию трансформации и исходное значение, возвращает тип исходного значения, применяя к нему функцию трансформации, пока предикат ложен
R.until(R.lte(10), R.multiply(2))(2)


// Работа с предикатами allPass, anyPass, propSatisfies, pathSatisfies, where
// allPass - принимает список предикатов и возвращает предикат, который true, если каждый из списка его предикатов true
R.allPass([R.is(Number), R.gt(R.__, 10)])

// anyPass - принимает список предикатов и возвращает предикат, который true, если хотя бы один из списка его предикатов true
R.anyPass([R.gt(R.__, 10), R.lt(R.__, 20)])

// propSatisfies - принимает предикат, ключ объекта и сам объект, проверяет значение ключа на предикат
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2});

// pathSatisfies - то же, только вместо ключа принимает список как путь
R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}});

// where - принимает специальный объект и тестируемый объект, возавтращает истину, если тестируемый объект удовлетворяет всем требованиям; значения спец объекта - предиакаты
const pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
});

pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
