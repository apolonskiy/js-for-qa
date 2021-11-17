




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

let role = 123;
switch (role) {
    case '123':
    case 'doctor':
    case 'visitor':
        console.log('Login DOC_ADM_GE user');
        break;
    case 'QA':
        console.log('Login Admin user');
        break;
}