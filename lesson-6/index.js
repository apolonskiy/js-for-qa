
// const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
// const util = require("util");
// let readFile = util.promisify(fs.readFile);

// async function readFileAsync(filename) {
//   // console.log("Reading file async 1.json");
//   let promise = readFile(`./data/${filename}`, { encoding: "UTF8" });
//   let content = await promise;
//   // console.log("File content type", typeof promise);
//   // console.log("File content is", content);
//   return content;
// }

// async function print3Files() {
//   try {
//       console.log("Reading file async 1.json");
//       let content = await readFileAsync("1.json");
//       console.log("File 1.json returned", content);
//       console.log("Reading file async nonexist.json");
//       let content2 = await readFileAsync("nonexist.json");
//       console.log("File 2.json returned", content2);
//       console.log("Reading file async 3.json");
//       let content3 = await readFileAsync("3.json");
//       console.log("File 3.json returned", content3);
//       console.log("Done executing async commands");
//   } catch (err) {
//       console.log("Oh no, we have error!");
//       console.log(err);
//   }
// }
// print3Files();

//---------------------------------

// class Guesser {
//   constructor(number, lives){
//     this.number = number;
//     this.lives = lives;
//   }

//   guess(num) {
//     if(num === this.number) { 
//       return true;
//     } else {
//       this.lives--;
//       if(this.lives > 0){
//         return false
//       } else {
//         throw new Error('You are dead!!!!');
//       }
//     }
//   }
// }

// const guesser = new Guesser(7, 2);
// console.log(guesser.guess(6));
// console.log(guesser.lives);
// console.log(guesser.guess(7))
// console.log(guesser.lives);
// console.log(guesser.guess(5))
// console.log('test')

//------------------

// Callback is a special function that will be executed once your async operation is complete
// You can think of it like -
// please call this function once file will be opened and content will be loaded
// This extremely useful for long running Input/Output operations like reading files, 
// sending HTTP requests...
// Lets see 2 implementations for printing file content - sync and async
// function printFileSync(name) {
//   const fs = require("fs");
//   let content = fs.readFileSync(`./data/${name}`, { encoding: "UTF8" });
//   console.log(name, "is ready:");
//   console.log(content);
// }

// function printFileAsync(name) {
//   const fs = require("fs");
//   fs.readFile(`./lesson-6/data/${name}`,  function(err, content) { // the third parameter is callback
//     console.log(name, "is ready:");
//     console.log(content);
//     console.log(JSON.parse(content));
//     return JSON.parse(content);
//   }); // it will be executed at the end of your async command
// }

// // Sync:
// // console.log("Reading file sync 1.json");
// // printFileSync("1.json");
// // console.log("Reading file sync 2.json");
// // printFileSync("2.json");
// // console.log("Done executing sync commands");

// Async
// console.log("Reading file async 1.json");
// const json1 = printFileAsync("1.json");
// console.log(json1);
// console.log("Reading file async 2.json");
// printFileAsync("2.json");
// console.log("Done scheduling async commands");



// // ERRORS handling:
// fs.readFile(
//   // relative path to file
//   `./data/notexisting.json`,
//   // reading options
//   { encoding: "UTF8" },
//   // special function called callback:
//   function(err, content) {
//     // It is convention - first parameter of callback function must be err
//     // if we have error
//     if (err) {
//       console.log("Oh no, we have error!");
//       console.log(err);
//       // you can re-throw if you want
//       throw err;
//     }

//     console.log(content);
//   }
// );

// const filesystem = require("fs");

// // PROMISES
// // Promises are special object-abstraction over result of async operation that is not ready yet
// const futureResult = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Now our Promise is fulfilled after 2 secs!");
//     reject();
//     console.log("2 Now our Promise is fulfilled after 2 secs!");
//   }, 2000);
// });

// // Key feature is possibility to subscribe to result when it will be ready using .then()
// futureResult.then(function() {
//   console.log("1 Yay! Promise is fulfilled!");
// }).then(function() {
//   console.log("1 Yay! Promise is fulfilled!");
// }).then(function() {
//   console.log("1 Yay! Promise is fulfilled!");
// }).catch( function () {
//   console.log("error");
// })
// // You can subscribe multiple times to same promise:
// futureResult.then(function() {
//   console.log("2 Yay! Promise is fulfilled!");
// });


// // Lets rewrite this to use Promise
// filesystem.readFile(
//   // relative path to file
//   `./6/data/1.json`,
//   // reading options
//   { encoding: "UTF8" },
//   // special function called callback:
//   function(err, content) {}
// );

// const readFile = (filename) => {
//   const result = new Promise(function(resolve, reject) {
//     filesystem.readFile(
//       // relative path to file
//       `./data/${filename}`,
//       // reading options
//       { encoding: "UTF8" },
//       // special function called callback:
//       function(err, content) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(content);
//         }
//       }
//     );
//   });
//   return result;
  // Our function returns Promise,
  // that will allow us listen for result of async operation
// }

// And usage is folowing
// console.log("Reading file async 1.json");
// let promise1 = readFile("12.json");
// console.log(promise1);
// // Instead of passing callback - we are "subscribe" to "resolved" state of promise
// promise1.then(function(content) {
//   console.log("File 1.json returned", content);
// }).catch(err => {
//   console.log(err);
// })

// console.log('STIL LWROKING')

// console.log("Reading file async 2.json");
// let promise2 = readFile("2.json");
// promise2.then(function(content) {
//   console.log("File 2.json returned", content);
// });
// console.log("Reading file async 3.json");
// let promise3 = readFile("3.json");
// promise3.then(function(content) {
//   console.log("File 3.json returned", content);
// });
// console.log("Done scheduling async commands");







// Error handling with promises
// console.log("Reading file async 1.json");
// readFile("1.json")
//   .then(function(content) {
//     console.log("File 1.json returned", content);
//     console.log("Reading file async nonexistingfile.json");
//     return readFile("nonexistingfile.json");
//   })
//   .then(function(content2) {
//     console.log("File 2.json returned", content2);
//     console.log("Reading file async 3.json");
//     return readFile("3.json");
//   })
//   .then(function(content3) {
//     console.log("File 3.json returned", content3);
//   })
//   .catch(function(err) { // caych any fail from any .then
//     console.log("Oh no, we have error!");
//     throw new Error('test');
//   })
//   .finally(function() {
//     console.log('clean DB')
//   })
// console.log("Done scheduling async command");





// const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
// const util = require("util");

// //not import
// const readFile = util.promisify(fs.readFile);

// // async/await is special keywords to work with async operations results
// // async/await is still based on Promises
// // Lets see how we can work with async operations using async/await

// // console.log("Reading file async 1.json");
// // let content = await readFile("./data/1.json", { encoding: "UTF8" });
// // console.log("File content is", content);

// // await can be only used inside "async" function:
// async function readFileAsync(filename) {
//     // console.log("Reading file async 1.json");
//     let content = await readFile(`./data/${filename}`, { encoding: "UTF8" });
//     // console.log("File content type", typeof content);
//     // console.log("File content is", content);
//     return content;
// }

// // Function that is declared as async now will return Promise
// // Does not matter what you return from that function - it will be wrapped to Promise.
// let res = readFileAsync('1.json');
// console.log("Async function returned", res, "Type is", typeof res);


// const getAsyncResult = async () => {
//   let res = await readFileAsync('1.json');
//   console.log("Async function returned", res, "Type is", typeof res); 
// }

// getAsyncResult();


const https = require('https');

const url = 'https://node-weather-app-apo.herokuapp.com/weather?address=kyiv';

function httprequest() {
  return new Promise((resolve, reject) => {
    let body = [];
    const request = https.get(url, (res) => {

      res.on('data', (content) => {
        // console.log(content);
        body.push(content);

      });

      res.on('end', () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
      } catch(e) {
          reject(e);
      }
      resolve(body);
      })
    })
    
    request.on('error', (error) => {
      console.log(error)
    })
    
    request.end()

  })
}

const asyncFn = async () => {
  const data = await httprequest();
  console.log(data);
}

asyncFn();
// httprequest().then((data) => {
//   console.log(data);
// });

