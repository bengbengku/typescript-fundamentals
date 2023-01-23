// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done.');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Beng', hobbies: ['Swimming'] }, { age: 28 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function coundAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got No Value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(coundAndDescribe({ length: 30, name: 'Max' }));

//Generic 'keyof' constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Beng' }, 'name');
//Generic 'keyof' constraint

//Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Anggiat');
textStorage.addItem('Benget');
textStorage.removeItem('Benget');
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number | string>();
numberStorage.addItem(12);
numberStorage.addItem(42);
numberStorage.addItem(51);
numberStorage.removeItem(12);
console.log(numberStorage.getItem());

// const objStorage = new DataStorage<object>();
// const objName = { name: 'Anggiat' };
// objStorage.addItem(objName);
// objStorage.addItem({ name: 'Benget' });
// objStorage.removeItem(objName);
// console.log(objStorage.getItem());

//Generic Classes

//Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function creteCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Benget', 'Anggiat'];

//Generic Utility Types

//Generic Types VS Union Types

//Generic Types VS Union Types
