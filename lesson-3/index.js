// const functionA = (arg) => arg - 2;
// console.log(functionA(5))

// return function;
// return arg;
// return undefined;
// return 'str'


// function triple(argument) {
//     console.log(argument);
//     return argument * 3
//   }
  
//   function minusTwo(argument) {
//     console.log(argument);
//     return argument - 2
//   }

//   const result = triple(minusTwo(5));

//   console.log(result);

// const post = {
//     title: 'asb',
//     body: '1',
//     author: ['I'],
//     views: 2,
//     // someFunc: function comment1(first_name) {
//     //     console.log(first_name);
//     // },
//     someFunc: (arg) => console.log(arg),
//     // someFunc(arg) {
//     //     console.log(arg)
//     // },
//     isLive : true
// };

// post['someFunc'](3)

// const postIneer = {
//     firstName: "1",
//     lastName: "2",
//     comment: "comment"
// }

// const QQQ = 'body';

// const post = {
//     title: "ABC",
//     body: "EFG",
//     author: "Shevchenkoo",
//     views: "Bla",
//     isLive: true,
//     undefined: 'ZXC',
//     "const comment": {
//         firstName: "1",
//         lastName: "2",
//         comment:  {
//             body: "inner body"
//         }
//     },
//      someFunction (a) {
//         console.log (a)
//     }
// }

// let keys = Object.keys(post);
// console.log(keys);

// let values = Object.values(post)
// console.log(values)

// console.log(post[QQQ])


// let title = "ABC";
// let body = "Some text";
// let author = "J";
// let views = 300;
// let isLive = true;
// const someFunc = () => comsole.log('test');


// const post = {
//     title,
//     body: "Some text",
//     author: "J",
//     views: 300,
//     isLive: true,
//     someFunc
    

// }
// console.log (post)
// let comment1  = {firstName: 'test'};
// post.comment = comment1
// console.log (post)
// delete post.body
// console.log(post);


// const helloCollegues1 = (company, team) => "I am working in ".concat(company, " in amazing ", team);


// const helloCollegues = (company,team) => `Hello ${team} with my ${company} company`;

// function helloColleagues (company , team ) {

//     return `Hello ${team} . Amazing to work with my  ${company}`;
//   }

// console.log(helloColleagues())
// console.log([1,2,'a'].length)

// console.log(Object.keys.lenght);
// function isEmpty(obj){
//     if (Object.keys(obj).length > 0){
//         return false
//     }
//     else {
//         return true
//     }
// }

// const isEmpty = (obj) => Object.keys(obj).length ? false: true

// console.log(isEmpty({a: 'a'}))

// const maxNumber = (a, b) => a>b ? a : b;

// function maxNumber(a, b) {
//     return a>b ? a : b;
//   }







// Practice part
// --------------------------


// const a = [1,2,3];
// const b = {a, b: 'text', c: {d: '123', e: null}}
// const c = {...b}
// const c2 = Object.assign({}, b);

// b.a = 'NEW';
// console.log(c2)
// console.log(b)
// console.log(c);


// function sortArgs(...args) {

//   console.log(...args)
//   return args.sort()
// }
// // console.log(sortArgs(1,2,3,1))

// const a = ['1', '2', '1'];
// const w = a;
// const q = [...a];
// a[0] = 'WWWW'

// console.log(...a);
// console.log(...w);
// console.log(...q);
// console.log(sortArgs(...a));

// const object = {
//   test: "smth",
//   age: 23,
//   obj: {
//     "internal": ['value']
//   },
//   logString: () => {
//     console.log('test')
//     // return('some value')
//   }
// }

// console.log(object)


// const json = JSON.stringify(object)

// console.log(typeof object);

// console.log(json);

// console.log(JSON.parse(json))


// function generateObj(addfield = true) {
//   const obj =  {
//     testField: 'test'
//   }
// if(addfield){
//   return Object.assign({}, obj, {additionalField: {newField: 'It exists!'}})
// } else{
//   return obj;
// }
// }


// console.log((generateObj(false))?.additionalField?.newField)


// const obj1 = {
//   testFiled1: {
//     testField2: 'STROKA'
//   }
// }
// console.log(obj1.testFiled1['testField2'])


//--------------------------------\\
