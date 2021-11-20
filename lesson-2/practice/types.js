// String
console.log(String(null));
console.log(String(undefined));
console.log(String(null == undefined));
console.log(1 + '1');
console.log(2 + 1 + '1');
console.log('1' + 1 + 2 );


// Number
let a = +'12';
console.log(typeof a);
a = a.toString()
console.log( typeof a);

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(' \n  12 \r \n'));

// Bolean
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('0'));

console.log(null >= 0);
console.log(null == 1);
console.log(Boolean(null) === 0);

console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);