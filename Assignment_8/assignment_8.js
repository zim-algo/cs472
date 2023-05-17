// Lab8
// Question 1 (Creating Object student using Object literal)
let student = {
    firstName: 'Ivan',
    lastName: 'Zimbe',
    grades:[],
    inputNewGrade:function(...newGrade){
        //let index=this.grades.length+1
        this.grades.push(...newGrade)
    },
    computeAverageGrade:function(){
        this.sum = 0
        for(let e of this.grades){
            this.sum +=e
        }
        return this.sum/this.grades.length
    }
}

let stud1 = Object.create(student)
stud1.firstName='Blessings'
stud1.lastName='Naggayi'
stud1.grades=[87,76,90,70]

let stud2 = Object.create(student)
stud2.firstName='Avinash'
stud2.lastName='Ghimire'
stud2.grades=[60,90,75,80]

let stud3 = Object.create(student)
stud3.firstName='Eden'
stud3.lastName='Berhe'
stud3.grades=[98,79,80]

let multipleStudent = [stud1,stud2,stud3]

let total =0

multipleStudent.forEach((stud) =>{
    total += stud.computeAverageGrade()
})
let average = total/multipleStudent.length
console.log('The average of all students Using Object liteal is: '+average)
// console.log(stud3.lastName)
// console.log(stud3.grades)
// console.log(stud3.computeAverageGrade())


// // Question 2 (Creating student object using Constructer function)
function Student(firstName, lastName, ...grades){
    this.firstName = firstName
    this.lastName = lastName
    this.grades = grades
}
Student.prototype.inputNewGrade = function(...grades){
    return this.grades.push(grades)
}
Student.prototype.computeAverageGrade = function(){
    let total=0
    for(let e of this.grades){
        total +=e
    }
    return total/this.grades.length
}

let student1 = new Student('Mukasa', 'Kevin', 90,85,76)
let student2 = new Student('Allan', 'Ssenyonjo', 69,82,91)
let student3 = new Student('Marvin', 'Mugume', 88,75,72)

let arrStud = [student3,student1, student2]

let sum1 = 0
arrStud.forEach((stud) =>{
    sum1 += stud.computeAverageGrade()
})
let average1 = sum1/arrStud.length
console.log(student1)

console.log('The average of all students using Constructor function is: '+average1)

// Question 3

Student.prototype.sort = function(){
    let temp; 
    for(let i=0; i< this.grades.length; i++ ){
        for(let j=0; j<this.grades.length-1; j++){
            if(this.grades[j]>this.grades[j+1]){
                temp = this.grades[j]
                this.grades[j] = this.grades[j+1]
                this.grades[j+1]=temp
            }
        }
    }
    return this.grades
}

console.log(student1.sort())
console.log(student2.sort())