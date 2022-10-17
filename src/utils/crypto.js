const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword)=>{
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(hashPassword('root'));

// console.log(comparePassword('root', '$2b$10$GXBD.M05SKSx9om5i2WlBeIbmS0K2lDMac.ydDlMZXgZbvw9fyRB.') );


module.exports = {
    hashPassword,
    comparePassword
}