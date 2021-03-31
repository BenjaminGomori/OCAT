const bcrypt = require ('bcrypt');

  const copmarePasswords = async function (password, storedPassword, callBack ) {
    await bcrypt.compare(password, storedPassword, function(err, result) {
        callBack(result);
    });;
}

module.exports = copmarePasswords;
