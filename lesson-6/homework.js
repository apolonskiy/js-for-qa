// Rewrite current function using async/await syntax


// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }


//   loadJson('no-such-user.json')
//   .then(res => {
//     alert(res);
//   }) // (3)
//     .catch(alert); // Error: 404


const { rejects } = require('assert');
const fs = require('fs')
const utils = require('util');


fs.readFile('./data/1.json', (err, data) => {
  if(err){
    throw err
  } 
  fs.writeFile('./data/NEW.json', data, (err) => {
    if(err) throw err;
  } );
})

setTimeout(() => fs.exists('./data/NEW.json', (exists) => {
  if(exists) fs.unlink('./data/NEW.json', (err) => {
    if(err) throw err
  })
 }), 2000);
 

//  const createNewFile = async () => {
//    const readFile = utils.promisify(fs.readFile);
//    const fileData = await readFile('./data/1.json');

//    const writeFile = utils.promisify(fs.writeFile);
//    await writeFile('./data/NEW.json', fileData);
//  }

//  createNewFile()

//  const deleteFile = async () => {
//    const exists = utils.promisify(fs.exists);
//    console.log(await exists('./data/NEW.json'))
//     const deleteFile = utils.promisify(fs.unlink);
//     await deleteFile('./data/NEW.json');
//     console.log(await exists('./data/NEW.json'))
//  }
//  deleteFile();

//----------------------------------

// const getFileData = async () => {
//   return new Promise((res, rej) => {
//     fs.readFile('./data/1.json', (err, data) => {
//       if(err){
//         rej();
//       }
//       res(data);
//     })
//   }) 
// }


// const writeFile = async () => {
//   const fileData = await getFileData();
//   return new Promise((res, rej) => {
//     fs.writeFile('./data/NEW.json', fileData, (err) => {
//       if(err) rej();
//       res();
//     })
//   })
// }

// const doesFileExist = async () => {
//   return new Promise((res, rej) => {
//       fs.exists('./data/NEW.json', (exists) => {
//         res(exists);
//       })
//   })
// }

// const deleteFile = async() => {
//   await doesFileExist();
//   return new Promise((res, rej) => {
//     fs.unlink('./data/NEW.json', (err) => {
//       if(err) rej();
//       res();
//     })
//   })
// }

// const exec = async () => {
//   await writeFile();
//   console.log(await doesFileExist());
//   await deleteFile();
//   console.log(await doesFileExist());
// }

// exec();