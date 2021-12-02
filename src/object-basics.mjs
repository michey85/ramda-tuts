import R from 'ramda';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 71,
  prof: 'Writer',
  isMaried: true,
  children: 0,
  languages: {
    english: 'native',
    spanish: 'b2',
    catalan: 'a2',
  }
};
const person2 = {
  firstName: 'Ana',
  lastName: 'Smith',
  age: 59,
  languages: {
    english: 'native',
  }
};
const people = [person, person2];
const isNumber = val => typeof (val) === 'number';

// Получение данных объекта
R.prop('age')(person);
R.props(['firstName', 'lastName'])(person);
R.propOr([], 'skills')(person);
R.values(person);
R.keys(person);
R.path(['languages', 'english'])(person);
R.pathOr('N/A', ['languages', 'russian'])(person);
R.toPairs(person);

// Копирование объекта
R.pick(['firstName', 'lastName', 'fullName'])(person);
R.pickAll(['firstName', 'lastName', 'fullName'])(person);
R.pickBy(isNumber)(person);
R.project(['firstName', 'lastName'])(people);
R.dissoc('children')(person);
R.omit(['children', 'isMaried'])(person);
R.dissocPath(['languages', 'spanish'])(person);
R.clone(person);

// Предикаты
R.has('fullName')(person); // only own prototype
R.hasIn('someMethod')(person); // with __ptoto__ keys
R.hasPath(['languages', 'russian'])(person);
R.eqProps('age')(person)(person2);

// Замена значений
R.assoc('age', 72)(person);
R.assocPath(['languages', 'spanish'], 'c1')(person);

// Склеивание объектов
R.mergeLeft(person, person2);
R.mergeRight(person, person2);
R.mergeDeepLeft(person, person2);
R.mergeDeepRight(person, person2);


// Создание нового объекта
R.applySpec({
  firstName: R.prop('firstName'),
  fullName: R.pipe(
    R.props(['firstName', 'lastName']),
    R.join(' '),
  ),
  languages: R.pipe(
    R.prop('languages'),
    R.keys,
  )
})(person);


const convertPerson = R.ap(
  R.mergeRight,
  R.applySpec({
    fullName: R.pipe(
      R.props(['firstName', 'lastName']),
      R.join(' '),
    ),
    languages: R.pipe(
      R.prop('languages'),
      R.keys,
    )
  }),
);

R.pipe(
  R.assoc('age', 72),
  R.dissoc('isMaried'),
  convertPerson,
)(person);
