//Decorators
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

//decorator factories
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function (constructor: any) {
    console.log('rendering template...');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object..</h1>', 'app')
class PersonDecorator {
  name = 'Benget';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new PersonDecorator();
console.log(pers);
