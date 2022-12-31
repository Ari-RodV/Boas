const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firsName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

UserSchema.pre('save', function(next) {
    if (this.isModified('password') || this.isNew) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if (err) {
                next(err)
            }
            else {
                this.password = hash
                next()
            }
        })
    }
    else {
        next()
    }
})

UserSchema.methods.UniqueEmail = async (email) => {
    try {
        const result = await mongoose.model('User').find({ email })
    
        return result.length === 0
    }
    catch (err) {
        return false
    }
}

UserSchema.methods.ValidatePassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash)
    }
    catch (err) {
        return false
    }
}