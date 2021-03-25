const bcrypt = require ('bcrypt');

  const copmarePasswords = async function (password, storedPassword, callBack ) {
    //const generatedPassword = generatePassword(password);
    await bcrypt.compare(password, storedPassword, function(err, result) {
        console.log('compairing');
        console.log(result);
        if(result){
            callBack(result);
        }
        return;
    });;
}

module.exports = copmarePasswords;
