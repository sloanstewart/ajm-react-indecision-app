
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
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person('Dudester', 69);
console.log(me.getDescription());

const other = new Person();
console.log(other);