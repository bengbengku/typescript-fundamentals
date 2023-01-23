// Classes and Interfaces

abstract class Department {
  static fiscalYear = 2022;
  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
    //access static in constructor
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformations() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('A001', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'ITBeng') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

//static methods and property
const employee1 = Department.createEmployee('Benget');
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment('IT001', ['Benget']);
itDepartment.addEmployee('ITBeng');
itDepartment.addEmployee('ITAnggiat');
itDepartment.describe();
itDepartment.printEmployeeInformations();

console.log(itDepartment);

// const accounting = new AccountingDepartment('A001', []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = 'Reporting';
accounting.addReport('Something went wrong!');
console.log(accounting.mostRecentReport);
accounting.addEmployee('ITBeng');
accounting.addEmployee('Napitupulu');
// accounting.printReports();
// accounting.printEmployeeInformations();
accounting.describe();
// Constructer function and the 'this' keyword
// const accountingCopy = { name: 'DUMMYY', describe: accounting.describe };
// accountingCopy.describe();
