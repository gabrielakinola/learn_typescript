abstract class Department {
  // name: string;
  static fiscalYear = 2000;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department -ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department -ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("TemmyG");

console.log(employee1);

const it = new ITDepartment("no 1", ["Max"]);
console.log(it);

const acctDept = new AccountingDepartment("no 2", []);

acctDept.describe();

acctDept.addReport("Something went wrong");

console.log(acctDept.mostRecentReport);

acctDept.mostRecentReport = "Welcome home";

console.log(acctDept.mostRecentReport);

acctDept.printReports();

it.describe();

it.addEmployee("Gabriel");
it.addEmployee("Emmanuel");

it.printEmployeeInfo;
