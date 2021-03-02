class Person {
    constructor(name = 'nobody', age) {
        this.name = name;
        this.age = age || 0;
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Nina Hwang', 24);
console.log(me);
// Person {name: "Nina Hwang"}
console.log(new Person('someone else'));
// Person {name: "someone else"}
console.log(new Person());
// app.js:16 Person {name: "nobody"}
console.log(me.getGreeting());
console.log(new Person('someone else').getGreeting());

console.log(me.getDescription());


class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //calling the parent contructor function
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // to return boolean value
    }
    getDescription() {
        let description =  super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description
    }
}

const meAsStudent = new Student('Nina Hwang', 24, 'Business');
console.log(meAsStudent);
// Student {name: "Nina Hwang", age: 24, major: "Business"}
console.log(meAsStudent.hasMajor());
console.log(meAsStudent.getDescription());


class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const traveller = new Traveller('Nina', 24, 'Incheon');
console.log(traveller.getGreeting());
console.log(new Traveller('someone else', 30).getGreeting());