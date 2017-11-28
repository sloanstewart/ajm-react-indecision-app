
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return  this.name + ' Says: yo sup myguy?';
        return `${this.name} says: ayyy lmao`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Majoring in ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.home) {
            return greeting +=` I'm visiting from ${this.home}`;
        }
    }
}


const me = new Student('Dudester', 69, 'Twerkology');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const travelmane = new Traveler('travel mane', 420, 'Dublin');
console.log(travelmane.getGreeting());