function Person(name, age){
    this.name = name;
    this.age = age;

    this.describe = function(){
        return `${this.name} is ${this.age} years old`;
    }
}

let Info = new Person("Ahmed", 19)

// console.log(Info.describe());

function Animal(specie){
    this.specie = specie;
}
Animal.prototype.sound = function(){
    return `${this.specie} makes loud sound`
} // we cannot use arrow func bcz it doesnot have its own "this"

let cow = new Animal("cow");
// console.log(cow.sound());

//error

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let sprite = Drink("Sprite");