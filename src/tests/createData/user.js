const User = require("../../models/User")

const user = async()=>{

    const useeCreate = {
        "firstName": "Santiago",
        "lastName": "Loaiza",
        "email": "sle.0394@hotmail.com",
        "password": "12345678",
        "phone": "12345678"
    }

    await User.create(useeCreate)
}

module.exports = user