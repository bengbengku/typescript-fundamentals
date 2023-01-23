const button = document.querySelector('button')!; // tanda ! adalah menyatakan bahwa button exists

button.addEventListener('click', () => {
  console.log('Click me successfully.');
});

const addNum = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) => console.log(output);

printOutput(addNum(5, 2));

// Spread Operator

const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking', ...hobbies];

console.log(activeHobbies);

const personStat = {
  firstName: 'Beng',
  age: 17,
};

const copiedPerson = { ...personStat, activeHobbies };
console.log(copiedPerson);

// Spread Operator

// Rest Paramater

const addRestParam = (...numbers: number[]) => {
  let num = numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);

  return num;
};

const exeRestParam = addRestParam(2, 26, 4, 9.2, 21);
console.log(exeRestParam);

// Rest Paramater

// Array & Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);

const { firstName, age } = personStat;

// Array & Object Destructuring
