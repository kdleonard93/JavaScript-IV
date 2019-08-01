class Person {
    constructor(people) {
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I'm from ${this.location}!`;
    }
}

class Instructor extends Person {
    constructor(teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchphrase;
    }
    demo(subject){
        return `Today, we are learning about ${subject}!`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    score(student) {
        let points = Math.round(Math.random() * 100);
        if (student.grade <= 100) {
            student.grade += points;
            return `${points} has been added to ${student.name}'s grade, which brings their class grade to ${student.grade}`;
        }
        else {
            student.grade -= points;
            return `${points} has been subtracted from ${student.name}'s grade, which brings their class grade to ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(learner) {
        super(learner);
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
        this.grade = Math.round(Math.random(learner.grade) * 100);
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun the sprint challenge for ${subject}`;
    }
    graduate() {
        if(this.grade > 70) {
            return `${this.name} is ready for graduation!! You earned a ${this.grade}`;
        }
        else { let extraCredit = 70 - this.grade;
            this.grade += extraCredit;
            return `Extra credit boosted ${this.name}'s grade to ${this.grade}. You can now graduate!`;
        }
    }
}

class TeamLeads extends Instructor {
    constructor(tl) {
        super(tl);
        this.gradClassName = tl.gradClassName;
        this.favInstructor = tl.favInstructor;
    }
    standUp(channel) {  
        return `${this.name} announces to ${channel}, @channel standup times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const kira = new Instructor({
name: "Kira",
location: "Chicago, IL",
age: 24,
gender: "female",
favLanguage: "JavaScript",
specialty: "Front-end",
catchPhrase: `Wuba luba dub dub`
});

const kyle = new Instructor({
    name: "Kyle",
    location: "Chicago, IL",
    age: 26,
    gender: "male",
    favLanguage: "Go",
    specialty: "Back-end",
    catchPhrase: `And thats the wayyyyyyy the news goes!`
    });

const rodney = new Student({
name: "Rodney",
location: "Japan",
age: 28,
gender: "male",
favSubjects: ["Javascript", "Blockchain"],
grade: 100
});

const kim = new Student({
    name: "Kim",
    location: "Boulder, CO",
    age: 18,
    gender: "female",
    favSubjects: ["React", "Node.js", "Vue"],
    grade: 100,
    });

const chappelle = new TeamLeads({
name: "Chappelle",
location: "Africa",
age: 27,
gender: "male",
gradClassName: "WEBPT8"
});

const trish = new TeamLeads({
    name: "Trish",
    location: "L.A., CA",
    age: 33,
    gender: "female",
    gradClassName: "CS7"
    });


console.log(kira.speak());
console.log(kyle.demo("JS"));
console.log(chappelle.debugsCode(kim, "Vue.js"));
console.log(kyle.score(rodney));
console.log(kim.graduate());
console.log(trish.standUp("WebPT8"));
console.log(kyle.grade(kim, "Javascript"));
console.log(kim.listsSubjects());
console.log(rodney.PRAssignment(rodney, "JS"));
console.log(kim.sprintChallenge(kim, "Vue"));