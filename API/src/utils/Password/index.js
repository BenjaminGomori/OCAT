const bcrypt = require ('bcrypt');

  const copmarePasswords = async function (password, storedPassword, callBack ) {
    //const generatedPassword = generatePassword(password);
    await bcrypt.compare(password, storedPassword, function(err, result) {
        callBack(result);
    });;
}

module.exports = copmarePasswords;
