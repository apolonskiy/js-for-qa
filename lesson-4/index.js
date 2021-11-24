// let salaries = {
//     Mykola: 250,
//     Pavlo: 250,
//     Petro: 500,
//     innerObj: {
//         title: {
//             key: 'value'
//         },
//         body: 'my body'
//     },
//     test: '123'
//     }

//     const copyObj = JSON.parse(JSON.stringify(salaries));
//     copyObj.innerObj.title.key = 'NEW VALUE'
//     console.log(copyObj)
//     console.log(salaries)
   

    // console.log(abc)
    // abc = 1;
    // console.log(abc)
    // console.log(salaries);

// const arr = [ 'QQQ', 'BBB', 3, 4, 1, [5,6,7], [3, [8,9, [1,3]]]];

// const flarArr = arr.flat(3)
// console.log(flarArr)
// console.log(arr)

// const arrCopy = JSON.parse(JSON.stringify(arr));
// console.log(arrCopy[5][2] = 'HELLO' ) 
// console.log(arrCopy[2] = 'THEEE' ) 
// console.log(arr)
// console.log(arrCopy)

// const [test, hello, ...restArr] = arr;
// console.log(test, hello, restArr)



// const arrSum = [1,2,3,4,5,-1];
// console.log([...arrSum].reverse());
// console.log(arrSum)
// console.log(arrSum.reduce(function(acc, curr) {return acc + curr}) )


/*
Ex 1 Create array, called it Post which should contains any:
- numeric value,
- boolean value,
- string value,
- undefined,
- function with some console.log,
- array of objects
Each value should have different array index
*/

// const post = [
//     1, 
//     true,
//      'str',
//       undefined,
//         function func(a) { return a},
//        [
//            {job: 'tester'},
//            {job: 'dev'}
//         ]
//      ]

// //1
// console.log(post[0]);
// console.log(post[post.length - 1])
// console.log(post[4]('test'))

// Exercise 1
// Write a function which should return sum of all numbers inside array
// const numbers = [1, -1, 2, 3];

// function sum(numbers) {
// //  let result = 0;
// //  for(const value of numbers){
// //      result += value
// //  }
// //  return result;
//     return numbers.reduce((acc, curr) => acc + curr)
// }

// console.log(sum(numbers)); 

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
// function arrayFromRange(min, max) {
//     if(min >= max){
//         throw new Error('Min is more than Max, incorrect value');
//     }
//     let result = [];
//     for(let i = min; i <= max; i++) {
//         result.push(i);
//     }
//     return result;
// }

// const numbers = arrayFromRange(1, 4);

// console.log(numbers); // Should display [1, 2, 3, 4]

// const negativeNumbers = arrayFromRange(-10, -8);
// console.log(negativeNumbers); 

// try {
//     const a = arrayFromRange(-10, -11);
//     return a;
// } catch(e) {
//     throw new Error('NEW ERROR');
//     return e.status
// }


// console.log('THIS STILL WORKS');

// Exercise 4

// let movies = [
//     {title: 'a', year: 2019, rating: 4.7},
//     {title: 'b', year: 2018, rating: 4.4},
//     {title: 'c', year: 2019, rating: 4.3},
//     {title: 'd', year: 2019, rating: 3.9},
// ]

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 

// const arrNew = movies.filter((movie) => movie.year === 2019 && movie.rating > 4);
// console.log(arrNew)
// console.log(movies)
