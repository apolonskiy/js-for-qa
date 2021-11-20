




// console.log(1 == '1' && typeof 1 == typeof '1')
// console.log(1 !== '1')
// console.log(1 != '1')

// if (10 > 5) {
//     console.log(true);
//   } else {
//     console.log( false); 
//  }

// GetMyElemen('element') -> false ; GetMyElemen('element') -> false; GetMyElemen('element') -> false


//  if (false) {
//      console.log('TRUE')
//  } 

//  true -> !true == false

// let str =  (typeof NaN)

// console.log(str)
// if (undefined) {
//     console.log(true)
// } else {
//   console.log(false) 
// }

// console.log(Boolean(NaN));

// let a = +'12';
// console.log(typeof a);
// a = a.toString()
// console.log( typeof a);

// console.log("2 2" === "2  2" );
// console.log('a'.charCodeAt(0) > 'p'.charCodeAt(0))
// console.log('p'.charCodeAt(0));
// console.log('a'.charCodeAt(0));

// console.log('2' > '12');

// console.log(undefined === null);

// 1- What is the value of y? 
// let x = 10;
// let y = (x > 5) && (x < 15); 
// y = true && false && true // (1 * 0 * 1)
// console.log(y)
// y = true || false || false // (1 + 0 + 0)
// console.log(y)
// y = !y
// console.log(y);

// let x = 5; 
// x += 3; 
// const b = 5 % 3.8

// console.log(b);

// let x = 10; 
// x++
// let y = x

// console.log(y)
// console.log(x)

// for (let i = 0; i < 3; i++) {
//     if(i === 1){
//         console.log(i++)

//     } else {
//         console.log('Iteration:', i);
//     }

// }



// let x = 1; 
// let y = x !== 2;
// console.losssss

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// console.log(a);
// console.log(b);
// console.log(++d)
// console.log(d);
// console.log(c)


// import * as fs from 'fs';
// import { homedir } from 'os';
// import * as path from 'path'

// console.log(fs.existsSync(path.join(homedir(), '/Downloads', 'hack.php')))

// console.log((fs.readFileSync(path.join(homedir(), '/Downloads', 'hack.php'))).toString())


/*
THIS IS PART FOR LOOPS
*/

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 0);

// i = 0;
// while (i < 1) {  // (condition)
//     console.log(i);
//     i++;
//     // do not forget increment variable
// }

const arr = [3, 4, [10,20,30]]
console.log(arr[2][2]);

// for(let i = 0; i < 3; i++){
//     // console.log(i)
//     // // console.log(Math.random(), i)
//     // // randomNumbers += Math.floor(Math.random() * i)

//     for (let j = 0; j < 3; j++) {
//         if(i > 1){
//             console.log(arr[i][j]);
//         } else {
//             console.log(arr[i]);
//         }
//     }
// }

// console.log(Boolean(NaN));


// const str = 'asd';
// if ( Number(str) ){
//     console.log(str)
// }


// let counter = 0;
// let scrollResult = scrollToEl('elemntName');
// while(!scrollResult  && counter < 5) {
//     console.log(true)
//     scrollResult = scrollToEl('elemntName');
//     counter ++;
// }

const a = '';

if(a) {
    console.log(a)
} else {
    console.log('HERE')
}

const str = 'this is my name';
console.log(str[7])

for( const sub of str){
    console.log(sub)
}