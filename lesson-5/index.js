

// let a = 'test';
// var b = 'TEST';

// function ConsoleTestFunc(testData) {
//     this.testData = testData;

// }

// this.b = 'aaa';
// const a = {
//   b: 's',
//   func: () => {
//     console.log(this.b);
//   }
// }
// a.func()

// const arr = () => {
//   console.log(this)
// }
// arr()

// // const ConsoleLogArrow = (testData) => { 
    

// // }
// // console.log(this);

// const data = new ConsoleTestFunc('test')
// // console.log(data.testData)

// // const obj = {
// //     a: 'test',
// //     func: function () { console.log(this)}
// // }

// // obj.func()

// this.age = 100;

// function Person() {
//     this.age = 0;

//     this.growUp = function () {
//         console.log(this);
//         this.age++;
//         console.log(this);
//     };
//     this.growUp = () => {
//         console.log(this);
//         this.age++;
//         console.log(this);
//     };
// }

// const person1 = new Person();
// const person2 = new Person();
// person1.growUp();
// console.log(person1.age)
// console.log(person2.age)
// person.growUp();
// person.growUp();
// person.growUp();
// console.log()
// console.log(person)

// class Person{

//   #sex = 'male'

//   constructor(name, age, sex) {
//       this.name = name;
//       this.age = age;
//       this.#sex = sex;
//   }

//   sayHello() {
//       return `Hello, my name is ${this.name}. I'm ${this.age}. I'm ${this.#sex}`;
// }
// }

// const person = new Person('Andrii', 70, 'FEMALE');

// console.log(person);
// console.log(person.sex)

// class Student extends Person {
//   constructor(profession, name, age){
// super(name)
// this.age = age;
// this.profession = profession
//   }

//   speak() {
//     return this;
//   }
// }

// const student = new Student('QA', 'Vasya', 32);
// // console.log(student);
// // console.log(student.sayHello())
// console.log(person.speak)
// console.log(student.speak())

// const test = 'qqq'

// const obj = {
//   [`${test}eee`]: 'HERE'
// }
// console.log(Object.prototype)
// // console.log(obj[`${test}eee`])

//---------------------------------------------------------

// Actually we can now remove 'return' and wrapping object:
// function Human(name, favoriteFood, hoursOfSleep) {
//     this.legs = 2;
//     this.hands = 2;
//     this.head = 1;
//     this.name = name;
//     this.favoriteFood = favoriteFood;
//     this.hoursOfSleep = hoursOfSleep;
//     this.walk = function () {
//       console.log(`${this.name} is walking`);
//     };
//     this.eat = () => {
//       console.log(`${this.name} is eating ${this.favoriteFood}`);
//     };
//     this.sleep = () =>  {
//       console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
//     };
//     this.logThis = () => {
//         setTimeout( () => {
//             console.log(this);
//         }, 500);
//         console.log('HERE',this)
//     }
//   }
// //   new Human() syntax will automatically create object for us and return 'this'
// //   new key means run your function and return done object
//   let human1 = new Human("Mykola", "Borcht", null);
//   let human2 = new Human("Bob", "Pasta", 7);
//   let human3 = new Human("John", "Fruits", 4);

//   human1.walk(); // Mykola is walking
//   human1.eat(); // Bob is eating Shaurma
//   human1.sleep(); // John went sleep for 9 hours
//   human1.logThis()
  
//   human2.walk(); // Bob is walking
//   human2.eat(); // Bob is eating Pasta
//   human2.sleep(); 

//   function test() {
//       console.log(this.setTimeout);
//       const arrFun =  () => { console.log(this)};
//       arrFun();
//   }

//   const arrFun =  () => { console.log(this)};
//   arrFun()

//   test()


// ******************************************************************************************
  // CLASS
  // Actually all what we did before, has special syntax, and even more advanced capabilities:
  // Class is special way to define complex objects:
  class Human {
    // constructor function will be called at object creation
    // you don't need to put function key word
    // constructor actualy constract your function
    legs = 5;
    head = 1;
    hoursOfSleep = 8;
    constructor(name, favoriteFood, hoursOfSleep) {
      // you can set any your custom properties
      this.legs = 2;
      this.hands = 2;
      this.name = name;
      this.favoriteFood = favoriteFood;
      this.hoursOfSleep = hoursOfSleep || this.hoursOfSleep;
    }
    legs = 100;
    // humanTwo = new HumanTwo('Steve')
    walk = function () {
      this.someVariable = 'value'; // undefined
      console.log(`${this.name} is walking`);
    };
    eat(...args) {
      console.log(`${this.name} is eating ${this.favoriteFood}`);
    };
    sleep() {
      console.log(`${this.name} went sleep for ${this.hoursOfSleep} hours`);
    };

    static driveTheCar(car) {
        console.log(this);
        return `I'm driving the ${car}`;
    }
  }

//   class HumanTwo {
//       constructor(name){
//           this.name = name
//       }
//       getName(){
//           console.log(this.name)
//       }
//   }

  class Boy extends Human {

    #privateField = 'PRIVATE'
    constructor(name, favoriteFood, favouriteCar){
        super(name, favoriteFood);
        this.#privateField = favouriteCar || this.#privateField
        this.favouriteCar = favouriteCar;
        this.name = 'HELLO'
    }

    #sayHelloBoy() {
        return this.name + ' says hello!!! ' + this.#privateField;
    }

    sayHelloPublic() {
        return this.#sayHelloBoy()
    }
  }

  
  // Usage is still same:
  let human1 = new Human("Mykola", "Borcht");
  const boy1 = new Boy("Andrii", undefined, undefined);
  console.log(boy1.sayHelloPublic());
  console.log(boy1.favouriteCar);
console.log(boy1.privateField);
  console.log(boy1.hoursOfSleep);
  console.log(Boy.driveTheCar('Volvo'));

  const func = (car) => {
      console.log(Boy.driveTheCar(car))
  }
  func('VW')
  

//   human1.walk(); // Mykola is walking
//   human1.eat(); // Mykola is eating Borcht
//   human1.sleep(); // Mykola went sleep for null hours
//   human1.humanTwo.getName()
// Human.prototype.countLegsAndHands = function() {
//     return this.legs + this.hands
// }
// console.log(Human.prototype);
//   console.log(human1.countLegsAndHands());



//   // There are no special type for Class, it is still constructor function, as we started in the begining
//   console.log(typeof Human); // function
//   // For created object it is object 
//   console.log(typeof human1); 
//   const a= 1;
//   console.log(Number.prototype)
//   console.log(a.__proto__)
  