"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
Department.fiscalYear = 2000;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department -ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    describe() {
        console.log("Accounting Department -ID: " + this.id);
    }
    addReport(text) {
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
