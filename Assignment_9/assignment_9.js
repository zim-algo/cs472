class Student {

    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
    checkAnswer(answer) {
        return (this.answer === answer);
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }
    scoreStudentBySid(sid) {
        const student = this.students.find((s) => s.studentId === sid);
        const score = student.answers.reduce((acc, answer) => {
            const question = this.questions.find(x => x.qid === answer.qid);
            if ((question) && question.checkAnswer(answer.answer)) {
                return acc + 1;
            }
            return acc;
        }, 0);
        return score;
    }
    getAverageScore() {
        const totalScore = this.students.reduce((acc, student) => {
            return acc + this.scoreStudentBySid(student.studentId);
        }, 0);
        return totalScore / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Result: 2.5

