// Number 1

// Q1: const numbers = [1, 5, 18, 2, 77, 108]; print the odd numbers. You're not allowed to use for, while, do...while, for..of, forEach loop. 

function printOdd(...arr) {

    arr.filter(num => num % 2 != 0)
        .map((item) => console.log(item));
}
// console.log (oddNum);
// printOdd(1, 5, 18, 2, 77, 108);

// Number 2

function sum(...arr) {

    return arr.filter(num => num > 20)
        .reduce((num, currentValue) => num + currentValue, 0);

}

// console.log(sum(10, 20, 50, 30, 8));

// Number 3

getNewArray = function (...arr) {

    return arr.filter(str => str.length >= 5 && str.includes('a'));

}

console.log(getNewArray("Hello", "Wonderful", "Happy", "People", "Have a great day"));

// Number 7

var myObject = {

    firstName: 'ivan',
    lastName: 'zimbe',

}

function fullName(myObject) {

    return {

        fullName: this.firstName + " " + this.lastName,
    }
}

console.log(fullName.call(myObject, myObject));

// Number 8

var newObject = {

    firstName: 'ivan',
    lastName: 'zimbe',
}
function logMessage() {

    console.log(this.firstName + " " + this.lastName);

}

function main(object, callBack) {

    let bound = callBack.bind(object);
    bound();

}

main(newObject, logMessage);

// Class Practice question

class Employee {

    #fullname;
    salary;
    hireDate;
    static #counter = 0;


    constructor(fname, salary, date) {
        this.#fullname = fname;
        this.salary = salary;
        this.hireDate = date;
        Employee.incCounter();
    }

    get fullName() {
        return this.fullName;
    }
    set fullName(fname) {
        this.fullName = fname;
    }
    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this.salary = salary;
    }
    get hireDate() {
        return this.hireDate;
    }
    set hireDate(date) {
        this.hireDate = date;
    }
    static incCounter() {
        Employee.incCounter += 1;
    }
    get incCounter() {
        return Employee.incCounter;
    }
    static getCounter() {
        return Employee.#counter;
    }

}

class Manager extends Employee {

    constructor(name, salary, hireDate, bonus) {
        super(name, salary, hireDate);
        this.bonus = bonus;
    }

    calcSalary() {
        return this.salary = this.bonus + this.salary;
        // return super.calcSalary () = this.bonus + super.calcSalary ();
    }
}

let mgr = new Manager("Smith smith", 15000, new Date(2020, 5, 5), 0.05);

console.log(mgr.calcSalary());

console.log(mgr.getCounter());

console.log(Manager.getCounter);

Employee.prototype.getSalary = function () {
    // instance method added to prototype
}
Employee.anotherStaticMethod = function () {
    // static method added to employee class
}

console.log("Employee " + typeof (Employee))
console.log("Employee prototype " + typeof (Employee.prototype))
console.log("emp " + typeof (emp1))

console.log(emp1 instanceof Employee);
console.log(mgr instanceof Employee);
console.log(mgr instanceof Manager);
