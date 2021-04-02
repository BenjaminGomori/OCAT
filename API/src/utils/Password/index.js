const { resolve } = require('app-root-path');
const bcrypt = require ('bcrypt');

// const copmarePasswords = async function (password, storedPassword, callBack ) {
  //const copmarePasswords = async function (password, storedPassword) {
    // let isSamePassword = await bcrypt.compare(password, storedPassword, function(err, result) {
    //   console.log('result');
    //   console.log(result);
    //   resolve(''+result);
    //   return result;
  // });
  // console.log(isSamePassword);
  // return isSamePassword;
// }

const copmarePasswords = async function (password, storedPassword, callBack ) {
  await bcrypt.compare(password, storedPassword, function(err, result) {
      callBack(result);
  });;
}

const getEncryptedPassword = async function (regularPassword, callback) {
  let hashedPassword = await bcrypt.hash(regularPassword, 10).then(function(hash) {
    console.log(hash);
    return hash;
  });
  console.log('2nd',hashedPassword);
  return hashedPassword;
}

module.exports.comparePassword = copmarePasswords;
module.exports.getEncryptedPassword = getEncryptedPassword;
